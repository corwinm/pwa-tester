import React from "react";
import preval from "preval.macro";

const dateTimeStamp = preval`module.exports = new Date().toLocaleString();`;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          PWA Tester by <a href="https://github.com/corwinm">Corwin Marsh</a>.
          The source code is available on{" "}
          <a href="https://github.com/corwinm/pwa-tester">
            {" "}
            <span className="icon">
              <i className="fab fa-github" />
            </span>
            GitHub
          </a>
          <a href="https://googlechrome.github.io/lighthouse/viewer/?gist=6ac7f4fd8b349c903dfcf04d2ff88e3e">
            {" "}
            <span className="icon">
              <i className="fab fa-chrome" />
            </span>
            Lighthouse Score
          </a>
          
        </p>
        <p>Built: {dateTimeStamp}</p>
      </div>
    </footer>
  );
}
