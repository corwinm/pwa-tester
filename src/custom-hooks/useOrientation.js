import { useEffect, useState } from "react";

export function useOrientation() {
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
  return orientation;
}
