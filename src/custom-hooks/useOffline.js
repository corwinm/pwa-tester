import { useState, useEffect } from "react";

export function useOffline() {
  const [offline, setOffline] = useState(
    "onLine" in navigator ? !navigator.onLine : true
  );
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
  return offline;
}
