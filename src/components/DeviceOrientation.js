import React, { useEffect, useState } from "react";
import Page from "./Page";

function DeviceOrientationSupported() {
  const [orientation, setOrientation] = useState(null);
  useEffect(() => {
    const deviceOrientationHandler = rotationEvent => {
      console.log(rotationEvent);
      setOrientation(rotationEvent);
    };
    window.addEventListener(
      "deviceorientation",
      deviceOrientationHandler,
      true
    );
    return () => {
      window.removeEventListener("deviceorientation", deviceOrientationHandler);
    };
  }, []);
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
