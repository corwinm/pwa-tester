import React from "react";
import ReactGA from "react-ga";

ReactGA.initialize("UA-139919526-1", {
  testMode: process.env.NODE_ENV !== "production"
});

function pageView(path) {
  ReactGA.pageview(process.env.PUBLIC_URL + path);
}

export const AnalyticsContext = React.createContext({
  pageView
});
