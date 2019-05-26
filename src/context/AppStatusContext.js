import React from "react";
import useAppStatus from "custom-hooks/useAppStatus";

export const AppStatusContext = React.createContext({
  updateAvailable: false,
  offLineReady: false,
  registration: null,
  installPrompt: null
});

export const AppStatusProvider = ({ children }) => {
  const appUpdateAvailable = useAppStatus();
  return (
    <AppStatusContext.Provider value={appUpdateAvailable}>
      {children}
    </AppStatusContext.Provider>
  );
};
