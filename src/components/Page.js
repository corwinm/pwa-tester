import React from "react";
import ErrorBoundary from "components/ErrorBoundary";

export default function Page({ title, children }) {
  return (
    <ErrorBoundary>
      <div className="notch-inset-item">
        <section className="section">
          <div className="container is-fluid">
            <h1 className="title has-text-white">{title}</h1>
            <div>{children}</div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}
