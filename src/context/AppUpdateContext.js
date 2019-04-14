import React from "react";

export const AppUpdateContext = React.createContext({
  updateAvailable: false,
  offLineReady: false,
  registration: null,
  installPrompt: null
});
