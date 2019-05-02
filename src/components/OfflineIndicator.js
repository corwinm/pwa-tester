import React, { useState, useEffect } from "react";

export default function OfflineIndicator() {
  const [offline, setOffline] = useState(!navigator.onLine);
  useEffect(() => {
    const updateOffline = () => setOffline(true);
    const updateOnline = () => setOffline(false);
    window.addEventListener("offline", updateOffline);
    window.addEventListener("online", updateOnline);
    return () => {
      window.removeEventListener("offline", updateOffline);
      window.removeEventListener("online", updateOnline);
    };
  }, []);

  if (!("onLine" in navigator) || !offline) {
    return null;
  }
  return (
    <section className="notch-inset-item has-background-grey-lighter ">
      <h1 className="navbar-item has-text-danger">Offline</h1>
    </section>
  );
}
