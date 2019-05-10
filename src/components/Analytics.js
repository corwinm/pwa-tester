import React from "react";
import ReactGA from "react-ga";

ReactGA.initialize("UA-139919526-1", {
  testMode: process.env.NODE_ENV !== "production"
});
ReactGA.pageview(window.location.pathname + window.location.search);

function pageView(path) {
  ReactGA.pageview(path);
}

export const AnalyticsContext = React.createContext({
  pageView
});
