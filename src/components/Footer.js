import React from "react";
import preval from "preval.macro";

const dateTimeStamp = preval`module.exports = new Date().toLocaleString();`

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>PWA Tester</strong> by{" "}
          <a href="https://github.com/corwinm">Corwin Marsh</a>. The source code
          is available on{" "}
          <a href="https://github.com/corwinm/pwa-tester">GitHub</a>
        </p>
        <p>Built: {dateTimeStamp}</p>
      </div>
    </footer>
  );
}
