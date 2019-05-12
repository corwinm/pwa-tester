import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import { AnalyticsContext } from "context/AnalyticsContext";

function Trace({ pageView, location }) {
  useEffect(() => {
    console.log("Trace pageView", location);
    pageView(location);
  }, [pageView, location]);
  return null;
}

export default function RouteTrace() {
  const analytics = useContext(AnalyticsContext);

  return (
    <Route
      path="/"
      render={({ location }) => (
        <Trace pageView={analytics.pageView} location={location.pathname + location.search} />
      )}
    />
  );
}
