import React, { useContext, useState } from "react";
import styles from "components/AppUpdate.module.scss";
import { AppUpdateContext } from "context/AppUpdateContext";

export default function AppUpdate() {
  const appUpdateAvailable = useContext(AppUpdateContext);
  const [showInstallPrompt, setShowInstallPrompt] = useState(true);
  const [showAppUpdate, setShowAppUpdate] = useState(true);

  if (showAppUpdate && appUpdateAvailable.updateAvailable) {
    const updateServiceWorker = () => {
      appUpdateAvailable.registration.waiting.postMessage("skipWaiting");
    };
    return (
      <div className={styles.floatingContainer}>
        <article className={"message is-primary " + styles.withShadow}>
          <div className="message-header">
            <button
              className="button is-primary is-inverted is-outlined"
              onClick={updateServiceWorker}
            >
              Update Now
            </button>
            <p>New version of the app available!!!</p>
            <button
              className="delete is-medium"
              aria-label="delete"
              onClick={() => setShowAppUpdate(false)}
            />
          </div>
          <div className="message-body">
            New version will automatically load after all windows reopened.
          </div>
        </article>
      </div>
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
      <div className={styles.floatingContainer}>
        <article className={"message is-primary " + styles.withShadow}>
          <div className="message-header">
            <button
              className="button is-primary is-inverted is-outlined"
              onClick={promptInstall}
            >
              Install App
            </button>
            <p>App available for installation!</p>
            <button
              className="delete is-medium"
              aria-label="delete"
              onClick={() => setShowInstallPrompt(false)}
            />
          </div>
          <div className="message-body">Install the app!</div>
        </article>
      </div>
    );
  }
  return null;
}
