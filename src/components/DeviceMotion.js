import React from "react";
import Page from "components/Page";
import { useMotion } from "custom-hooks/useMotion";

function DeviceMotionSupported() {
  const motion = useMotion();

  return (
    <Page title="Device Motion">
      {motion ? (
        <>
          <div>Acceleration:</div>
          <div>X: {motion.acceleration.x}</div>
          <div>Y: {motion.acceleration.y}</div>
          <div>Z: {motion.acceleration.z}</div>
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
