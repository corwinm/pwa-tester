import React from "react";
import Page from "components/Page";

export default function Features({ registration }) {
  return (
    <Page title="Features">
      <div className="tile is-ancestor">
        <Feature description="Geolocation" supported={navigator.geolocation} />
        <Feature
          description="Notifications"
          supported={"Notification" in window}
        />
        <Feature
          description="Payments"
          supported={registration && registration.paymentManager}
        />
      </div>
      <div className="tile is-ancestor">
        <Feature description="Motion" supported={window.DeviceMotionEvent} />
        <Feature
          description="Orientation"
          supported={window.DeviceOrientationEvent}
        />
        <Feature description="Vibration" supported={navigator.vibrate} />
      </div>
      <div className="tile is-ancestor">
        <Feature
          description="Online Status"
          supported={"onLine" in navigator}
        />
        <Feature description="Clipboard" supported={navigator.clipboard} />
        <Feature description="Web Share" supported={navigator.share} />
        {/* navigator.mediaDevices.getUserMedia */}
      </div>
    </Page>
  );
}

function Feature({ description, supported }) {
  if (supported === null) {
    return (
      <div className="tile is-parent">
        <article className="tile is-child box notification is-primary">
          <p className="title">{description}</p>
          <p className="subtitle">Loading...</p>
        </article>
      </div>
    );
  }
  if (supported) {
    return (
      <div className="tile is-parent">
        <article className="tile is-child box notification is-success">
          <p className="title">{description}</p>
          <p className="subtitle">Supported</p>
        </article>
      </div>
    );
  }

  return (
    <div className="tile is-parent">
      <article className="tile is-child box notification is-danger">
        <p className="title">{description}</p>
        <p className="subtitle">Not Supported</p>
      </article>
    </div>
  );
}
