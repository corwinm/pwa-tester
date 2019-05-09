import React from "react";
import ReactGA from "react-ga";

ReactGA.initialize("UA-139919526-1");
ReactGA.pageview(window.location.pathname + window.location.search);


export const AnalyticsContext = React.createContext({});
export const AnalyticsProvider = AnalyticsContext.Provider;
