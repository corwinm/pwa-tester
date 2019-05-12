import React from "react";

export const AppStatusContext = React.createContext({
  updateAvailable: false,
  offLineReady: false,
  registration: null,
  installPrompt: null
});
