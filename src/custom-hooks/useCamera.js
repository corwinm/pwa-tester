import { useState, useEffect } from "react";

export function useCamera() {
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
