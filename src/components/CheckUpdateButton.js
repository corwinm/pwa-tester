import React, { useContext, useState } from "react";
import { AppUpdateContext } from "context/AppUpdateContext";

export default function CheckUpdateButton() {
  const appUpdateAvailable = useContext(AppUpdateContext);
  const [updating, setUpdating] = useState(false);

  if (!appUpdateAvailable.registration) return null;

  if (appUpdateAvailable.updateAvailable) {
    const updateServiceWorker = () => {
      appUpdateAvailable.registration.waiting.postMessage("skipWaiting");
    };
    return (
      <button className="button is-info" onClick={updateServiceWorker}>
        <span className="icon">
          <i className="fas fa-sync" />
        </span>
        <span>Update Now</span>
      </button>
    );
  }

  async function checkForUpdate() {
    setUpdating(true);
    const registration = await appUpdateAvailable.registration.update();
    console.log(registration);
    setUpdating(false);
  }

  return (
    <button className="button is-info" onClick={checkForUpdate}>
      <span className="icon">
        <i className={"fas fa-sync" + (updating ? " fa-spin" : "")} />
      </span>
      <span>{updating ? "Updating" : "Check for Update"}</span>
    </button>
  );
}
