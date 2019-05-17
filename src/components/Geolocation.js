import React from "react";
import Page from "components/Page";
import { useGeolocation } from "custom-hooks/useGeolocation";

export default function Geolocation() {
  const location = useGeolocation();

  if (location instanceof Error) {
    return <Page title="Geolocation is NOT suported!" />;
  }

  return (
    <Page title="Geolocation is suported!">
      <div>latitude: {location && location.latitude}</div>
      <div>longitude: {location && location.longitude}</div>
    </Page>
  );
}
