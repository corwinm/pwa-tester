import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AnalyticsContext } from "./Analytics";

export default function RouteTrace() {
  const analytics = useContext(AnalyticsContext);
  return (
    <Route
      path="/"
      render={({ history, location }) => {
        if (history.action === "PUSH") {
          console.log("Route Event", location.pathname);
          analytics.pageView(location.pathname);
        }
        return null;
      }}
    />
  );
}
