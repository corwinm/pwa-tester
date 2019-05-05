import React from "react";
import { NavLink } from "react-router-dom";
import Page from "components/Page";

const getFeatures = registration => [
  {
    description: "Geolocation",
    route: "/geolocation",
    supported: navigator.geolocation
  },
  {
    description: "Camera",
    route: "/camera",
    supported: navigator.mediaDevices && navigator.mediaDevices.getUserMedia
  },
  {
    description: "Notifications",
    route: "/notifications",
    supported: "Notification" in window
  },
  {
    description: "Payments",
    supported: registration && registration.paymentManager
  },
  {
    description: "Motion",
    route: "/device/motion",
    supported: window.DeviceMotionEvent
  },
  {
    description: "Orientation",
    route: "/device/orientation",
    supported: window.DeviceOrientationEvent
  },
  { description: "Vibration", supported: navigator.vibrate },
  { description: "Online Status", supported: "onLine" in navigator },
  { description: "Clipboard", supported: navigator.clipboard },
  { description: "Web Share", supported: navigator.share },
  {
    description: "Push Notifications",
    supported: registration && "pushManager" in registration
  },
  {
    description: "Background Sync",
    supported: registration && "sync" in registration
  }
];

export default function Features({ registration }) {
  const features = getFeatures(registration);
  const mappedFeatures = features
    .map((feature, index) => <Feature key={index} {...feature} />)
    .reduce((rows, element, index) => {
      index % 3 === 0 && rows.push([]);
      rows[rows.length - 1].push(element);
      return rows;
    }, [])
    .map((row, index) => (
      <div key={index} className="tile is-ancestor">
        {row}
      </div>
    ));
  return <Page title="Features">{mappedFeatures}</Page>;
}

function Feature({ description, supported, route }) {
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
        <article className="tile is-child box notification is-success has-text-black">
          <p className="title">{description}</p>
          <p className="subtitle">
            Supported{" "}
            {route && (
              <NavLink
                to={route}
                aria-label={description}
                style={{ textDecoration: "none" }}
              >
                <span className="icon">
                  <i className="fas fa-arrow-circle-right" />
                </span>
              </NavLink>
            )}
          </p>
        </article>
      </div>
    );
  }

  return (
    <div className="tile is-parent">
      <article className="tile is-child box notification is-danger has-text-black">
        <p className="title">{description}</p>
        <p className="subtitle">Not Supported</p>
      </article>
    </div>
  );
}
