import React, { useContext } from "react";
import { AppUpdateContext } from "../context/AppUpdateContext";

function ServiceWorkerDetails({ registration }) {
  if (!registration) return null;

  return (
    <section className="section">
      <h1>Details</h1>
      <div>
        Active State: {registration.active && registration.active.state}
      </div>
      <div>
        Waiting State: {registration.waiting && registration.waiting.state}
      </div>
      {(window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone) && <div>Display mode is standalone</div>}
    </section>
  );
}

export default function Home() {
  const appUpdate = useContext(AppUpdateContext);

  const message =
    "serviceWorker" in navigator
      ? "ServiceWorker Supported!"
      : "ServiceWorker NOT Supported!";

  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{message}</h1>
          </div>
        </div>
      </section>
      <ServiceWorkerDetails registration={appUpdate.registration} />
    </>
  );
}
