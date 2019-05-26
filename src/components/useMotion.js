import { useEffect, useState } from "react";

export function useMotion() {
  const [motion, setMotion] = useState(null);
  useEffect(() => {
    const deviceMotionHandler = rotationEvent => {
      console.log(rotationEvent);
      setMotion(rotationEvent);
    };
    window.addEventListener("devicemotion", deviceMotionHandler, true);
    return () => {
      window.removeEventListener("devicemotion", deviceMotionHandler);
    };
  }, []);
  return motion;
}
