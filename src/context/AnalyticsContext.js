import ReactGA from "react-ga";

export function initializeGA() {
  ReactGA.initialize("UA-139919526-1", {
    testMode: process.env.NODE_ENV !== "production",
  });
}

export function pageView(path) {
  ReactGA.pageview(process.env.PUBLIC_URL + path);
}
