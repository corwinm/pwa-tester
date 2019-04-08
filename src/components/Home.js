import React from 'react'

export default function Home() {

  const message = 'serviceWorker' in navigator ? 'ServiceWorker Supported!' : 'ServiceWorker NOT Supported!';

  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{message}</h1>
        </div>
      </div>
    </section>
  );
}
