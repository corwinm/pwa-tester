import React, { useState } from "react";
import Page from "components/Page";

export default function Notifications() {
  const [permission, setPermission] = useState(
    "Notification" in window && Notification.permission
  );

  if (!permission) {
    return <Page>Notifications are not suported.</Page>;
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
      <Page title="Test Notification">
        <div>
          <button onClick={showTestNotification}>Click Me!</button>
        </div>
      </Page>
    );
  }

  const requestPermission = () => {
    Notification.requestPermission().then(newPermission => {
      setPermission(newPermission);
    });
  };

  return (
    <Page title="Test Notification">
      {permission === "denied" && <div>Permission Denied</div>}
      <div>
        <button onClick={requestPermission}>Request Permission</button>
      </div>
    </Page>
  );
}
