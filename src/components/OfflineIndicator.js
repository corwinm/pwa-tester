import React from "react";
import { useOffline } from "../custom-hooks/useOffline";

export default function OfflineIndicator() {
  const offline = useOffline();

  if (!offline) {
    return null;
  }
  return (
    <section className="notch-inset-item has-background-grey-lighter ">
      <h1 className="navbar-item has-text-danger">Offline</h1>
    </section>
  );
}
