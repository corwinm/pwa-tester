import { useState, useEffect } from "react";

export function useGeolocation() {
  const [location, setlocation] = useState(undefined);
  useEffect(() => {
    if (!navigator.geolocation) {
      return Error("Geolocation is not supported.");
    }
    function geoSuccess(e) {
      setlocation(e.coords);
    }
    function geoError(error) {
      console.error(error);
      setlocation(error);
    }
    const getPosition = navigator.geolocation.watchPosition(
      geoSuccess,
      geoError,
      { timeout: 10000 }
    );
    return () => {
      navigator.geolocation.clearWatch(getPosition);
    };
  }, []);
  return location;
}
