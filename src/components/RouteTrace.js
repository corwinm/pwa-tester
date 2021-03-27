import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { pageView } from "context/AnalyticsContext";

function Trace({ location }) {
  useEffect(() => {
    console.log("Trace pageView", location);
    pageView(location);
  }, [location]);
  return null;
}

export default function RouteTrace() {
  return (
    <Route
      path="/"
      render={({ location }) => (
        <Trace location={location.pathname + location.search} />
      )}
    />
  );
}
