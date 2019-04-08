import React, { useState, useEffect } from "react";

function useGeolocation() {
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

export default function Geolocation() {
  const location = useGeolocation();

  if (location instanceof Error) {
    return (
      <section className="section">
        <h1>Geolocation is NOT suported!</h1>
      </section>
    );
  }

  return (
    <section className="section">
      <h1>Geolocation is suported!</h1>
      <div>latitude: {location && location.latitude}</div>
      <div>longitude: {location && location.longitude}</div>
    </section>
  );
}
