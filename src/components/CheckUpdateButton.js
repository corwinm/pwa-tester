import React, { useContext, useState } from "react";
import { AppStatusContext } from "context/AppStatusContext";

export default function CheckUpdateButton() {
  const { registration, updateAvailable } = useContext(AppStatusContext);
  const [updating, setUpdating] = useState(false);

  if (!registration) return null;

  if (updateAvailable) {
    const updateServiceWorker = () => {
      registration.waiting.postMessage({type: "SKIP_WAITING"});
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
    const newRegistration = await registration.update();
    console.log(newRegistration);
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
