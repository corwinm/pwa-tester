import React from "react";
import Page from "components/Page";

export default function About() {
  return (
    <Page title="About PWA Tester">
      <h2 className="subtitle">
        PWA Tester is a Reactjs Progressive Web App (PWA) single page application (spa) bootstrapped with
        Create React App and hosted with GithubPages.
      </h2>
      <p>This app was created with the following goals:</p>
      <ol style={{ listStylePosition: "inside" }}>
        <li>Exercise the basic features of a Progressive Web App (PWA) with React's hooks api.</li>
        <li>Enable testing PWA features across devices.</li>
        <li>Establish best practices for PWA apps that are frequently updated.</li>
        <li>Establish best practices for PWA apps analytics.</li>
        <li>Serve as a reference for myself or others to use when adding PWA features to an app.</li>
      </ol>
    </Page>
  );
}
