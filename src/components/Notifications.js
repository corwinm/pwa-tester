import React, { useState } from "react";

export default function Notifications() {
  const [permission, setPermission] = useState(
    Notification && Notification.permission
  );

  if (!permission) {
    return <div className="section">Notifications are not suported.</div>;
  }
  if (permission === "granted") {
    const showTestNotification = () => {
      const notification = new Notification("Hi there!");
      notification.onclick = function() {
        // parent.focus();
        window.focus();
        this.close();
      };
      setTimeout(notification.close.bind(notification), 4000);
    };

    return (
      <div className="section">
        <div className="container is-fluid">
          <h1>Test Notification</h1>
          <div>
            <button onClick={showTestNotification}>Click Me!</button>
          </div>
        </div>
      </div>
    );
  }

  const requestPermission = () => {
    Notification.requestPermission().then(newPermission => {
      setPermission(newPermission);
    });
  };

  return (
    <section className="section">
      <div className="container is-fluid">
        <h1>Test Notification</h1>
        {permission === "denied" && <div>Permission Denied</div>}
        <div>
          <button onClick={requestPermission}>Request Permission</button>
        </div>
      </div>
    </section>
  );
}
