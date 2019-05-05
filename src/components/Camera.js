import React, { useState, useEffect } from "react";
import Page from "components/Page";

function useCamera() {
  const [mediaStream, setMediaStream] = useState(undefined);

  useEffect(() => {
    if (!navigator.mediaDevices) {
      setMediaStream(Error("Media devices not supported."));
      return;
    }
    let videoStream;
    async function getCameraSource() {
      try {
        videoStream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 }
          },
          audio: false
        });

        setMediaStream(videoStream);
      } catch (error) {
        console.error("getCameraSource", error);
        setMediaStream(error);
      }
    }
    getCameraSource();
    return () => {
      try {
        if (videoStream && videoStream.getVideoTracks) {
          videoStream.getVideoTracks().forEach(track => {
            track.stop();
          });
        } else {
          alert(`Camera not stopped?`);
        }
      } catch (error) {
        alert(`${error.name}: ${error.message}`);
      }
    };
  }, []);

  return mediaStream;
}

export default function Camera() {
  const cameraSource = useCamera();

  if (cameraSource instanceof Error || (cameraSource && cameraSource.name)) {
    return (
      <Page title="Camera is NOT suported!">
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
    <Page title="Camera is suported!">
      <div>Video Below?</div>
      <video id="video-chat" ref={setupCameraSource} autoPlay playsInline />
    </Page>
  );
}
