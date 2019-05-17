import { useEffect, useState } from "react";
export function useMotion() {
  const [motion, setMotion] = useState(null);
  useEffect(() => {
    const deviceMotionnHandler = rotationEvent => {
      console.log(rotationEvent);
      setMotion(rotationEvent);
    };
    window.addEventListener("devicemotion", deviceMotionnHandler, true);
    return () => {
      window.removeEventListener("devicemotion", deviceMotionnHandler);
    };
  }, []);
  return motion;
}
