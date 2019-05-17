import React from "react";
import Page from "components/Page";
import { useOrientation } from "custom-hooks/useOrientation";

function DeviceOrientationSupported() {
  const orientation = useOrientation();

  return (
    <Page title="Device Orientation">
      {orientation ? (
        <>
          <div>Alpha: {orientation.alpha}</div>
          <div>Beta: {orientation.beta}</div>
          <div>Gamma: {orientation.gamma}</div>
          <div>Compass: {orientation.webkitCompassHeading}</div>
        </>
      ) : (
        <div>No data</div>
      )}
    </Page>
  );
}

export default function DeviceOrientation() {
  if (window.DeviceOrientationEvent) {
    return <DeviceOrientationSupported />;
  }
  return (
    <Page title="Device Orientation">
      <div>Not supported</div>
    </Page>
  );
}
