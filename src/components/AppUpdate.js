import React, { useContext, useState } from "react";
import { AppStatusContext } from "context/AppStatusContext";
import FloatingMessage from "components/FloatingMessage";

export default function AppUpdate() {
  const { updateAvailable, registration, installPrompt } = useContext(
    AppStatusContext
  );
  const [showInstallPrompt, setShowInstallPrompt] = useState(true);
  const [showAppUpdate, setShowAppUpdate] = useState(true);

  if (showAppUpdate && updateAvailable) {
    const updateServiceWorker = () => {
      registration.waiting.postMessage({type: "SKIP_WAITING"});
    };
    return (
      <FloatingMessage
        title="New version of the app available!"
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
  if (showInstallPrompt && installPrompt) {
    const promptInstall = () => {
      installPrompt.prompt();
      // Wait for the user to respond to the prompt
      installPrompt.userChoice.then(choiceResult => {
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
