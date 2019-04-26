import React, { useEffect, useState } from "react";
import Page from "components/Page";

function DeviceMotionSupported() {
  const [orientation, setOrientation] = useState(null);
  useEffect(() => {
    const deviceMotionnHandler = rotationEvent => {
      console.log(rotationEvent);
      setOrientation(rotationEvent);
    };
    window.addEventListener("devicemotion", deviceMotionnHandler, true);
    return () => {
      window.removeEventListener("devicemotion", deviceMotionnHandler);
    };
  }, []);
  return (
    <Page title="Device Motion">
      {orientation ? (
        <>
          <div>Acceleration:</div>
          <div>X: {orientation.acceleration.x}</div>
          <div>Y: {orientation.acceleration.y}</div>
          <div>Z: {orientation.acceleration.z}</div>
        </>
      ) : (
        <div>No data</div>
      )}
    </Page>
  );
}

export default function DeviceMotion() {
  if (window.DeviceMotionEvent) {
    return <DeviceMotionSupported />;
  }
  return (
    <Page title="Device Motion">
      <div>Not supported</div>
    </Page>
  );
}
