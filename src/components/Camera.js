import React from "react";
import Page from "components/Page";
import { useCamera } from "custom-hooks/useCamera";

export default function Camera() {
  const cameraSource = useCamera();

  if (cameraSource instanceof Error || (cameraSource && cameraSource.name)) {
    return (
      <Page title="Camera is NOT supported!">
        {cameraSource.name && cameraSource.name}:{" "}
        {cameraSource.message && cameraSource.message}
      </Page>
    );
  }

  const setupCameraSource = el => {
    if (!cameraSource || !el) return;
    if ("srcObject" in el) {
      el.srcObject = cameraSource;
    } else {
      // For older browsers without the srcObject.
      el.src = window.URL.createObjectURL(cameraSource);
    }
  };

  return (
    <Page title="Camera is supported!">
      <div>Video Below?</div>
      <video id="video-chat" ref={setupCameraSource} autoPlay playsInline />
    </Page>
  );
}
