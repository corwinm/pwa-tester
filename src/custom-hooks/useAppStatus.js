import { useEffect, useState } from "react";
import * as sw from "../serviceWorker";

function useAppStatus() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [offLineReady, setoffLineReady] = useState(false);
  const [registration, setregistration] = useState(null);
  const [installPrompt, setinstallPrompt] = useState(null);

  useEffect(() => {
    const installPromptHandler = e => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setinstallPrompt(e);
      console.log("Install prompt available!", e);
    };
    window.addEventListener("beforeinstallprompt", installPromptHandler);
    return () => {
      window.removeEventListener("beforeinstallprompt", installPromptHandler);
    };
  }, []);

  useEffect(() => {
    let ignore = false;
    sw.register({
      onUpdate: registration => {
        if (ignore) return;
        console.log(
          "onUpdate called! New content after windows closed!",
          registration
        );
        setregistration(registration);
        setUpdateAvailable(true);
      },
      onSuccess: registration => {
        if (ignore) return;
        console.log("onSuccess called! Offline ready!", registration);
        setregistration(registration);
        setoffLineReady(true);
      }
    });
    console.log("serviceWorker.register called");
    return () => {
      console.log("ignore set to true");
      ignore = true;
    };
  }, []);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      setregistration(undefined);
      return;
    }
    let ignore = false;
    navigator.serviceWorker.getRegistration().then(currentRegistration => {
      if (ignore) return;
      console.log("Current sw registration", currentRegistration);
      setregistration(currentRegistration);
      setoffLineReady(!!currentRegistration);
      setUpdateAvailable(currentRegistration && !!currentRegistration.waiting);
    });
    return () => {
      ignore = true;
    };
  }, []);

  return { updateAvailable, offLineReady, registration, installPrompt };
}

export default useAppStatus;
