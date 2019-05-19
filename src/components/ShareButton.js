import React from "react";

export default function ShareButton() {
  const share = async () => {
    try {
      await navigator.share({
        title: "PWA Tester",
        text: "PWA Tester",
        url: window.location.href
      });
      console.log("Successful share.");
    } catch (error) {
      console.log("Error sharing:", error);
    }
  };

  return (
    <button
      className="button is-primary"
      onClick={share}
      disabled={!navigator.share}
    >
      <span className="icon">
        <i className="fas fa-share" />
      </span>
      <span>Share</span>
    </button>
  );
}
