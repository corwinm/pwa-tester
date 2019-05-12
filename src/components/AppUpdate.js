import React, { useContext, useState } from "react";
import styles from "components/AppUpdate.module.scss";
import { AppStatusContext } from "context/AppStatusContext";

function FloatingMessage({
  title,
  message = "",
  actionText,
  deleteClick,
  actionClick
}) {
  return (
    <div className={styles.floatingContainer + " notch-inset"}>
      <article className={"message is-primary " + styles.withShadow}>
        <div className="message-header">
          <p>{title}</p>
          <button
            className="delete is-medium"
            aria-label="delete"
            onClick={deleteClick}
          />
        </div>
        <div className="message-body">
          {message}
          <p>
            <button
              className="button is-primary is-fullwidth is-outlined"
              onClick={actionClick}
            >
              {actionText}
            </button>
          </p>
        </div>
      </article>
    </div>
  );
}

export default function AppUpdate() {
  const appUpdateAvailable = useContext(AppStatusContext);
  const [showInstallPrompt, setShowInstallPrompt] = useState(true);
  const [showAppUpdate, setShowAppUpdate] = useState(true);

  if (showAppUpdate && appUpdateAvailable.updateAvailable) {
    const updateServiceWorker = () => {
      appUpdateAvailable.registration.waiting.postMessage("skipWaiting");
    };
    return (
      <FloatingMessage
        title="New version of the app available!!!"
        actionText="Update Now"
        message={
          <p>
            New version will automatically load next visit after all open
            windows are closed.
          </p>
        }
        deleteClick={() => setShowAppUpdate(false)}
        actionClick={updateServiceWorker}
      />
    );
  }
  if (showInstallPrompt && appUpdateAvailable.installPrompt) {
    const promptInstall = () => {
      appUpdateAvailable.installPrompt.prompt();
      // Wait for the user to respond to the prompt
      appUpdateAvailable.installPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setShowInstallPrompt(false);
      });
    };
    return (
      <FloatingMessage
        title="App available for installation!"
        actionText="Install App"
        deleteClick={() => setShowInstallPrompt(false)}
        actionClick={promptInstall}
      />
    );
  }
  return null;
}
