import { AppStatusProvider } from "context/AppStatusContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppUpdate from "components/AppUpdate";
import ErrorBoundary from "components/ErrorBoundary";
import Footer from "components/Footer";
import Home from "components/Home";
import Navbar from "components/Navbar";
import OfflineIndicator from "components/OfflineIndicator";
import React, { Suspense, lazy } from "react";
import RouteTrace from "components/RouteTrace";

const LazyAbout = lazy(() => import("components/About"));
const LazyCamera = lazy(() => import("components/Camera"));
const LazyDeviceMotion = lazy(() => import("components/DeviceMotion"));
const LazyOrientation = lazy(() => import("components/DeviceOrientation"));
const LazyGeolocation = lazy(() => import("components/Geolocation"));
const LazyNotifications = lazy(() => import("components/Notifications"));

const App = () => {
  return (
    <div className="App">
      <AppStatusProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <RouteTrace />
          <Navbar />
          <OfflineIndicator />
          <main role="main">
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={LazyAbout} />
                <Route path="/geolocation" component={LazyGeolocation} />
                <Route path="/notifications" component={LazyNotifications} />
                <Route path="/camera" component={LazyCamera} />
                <Route path="/device/orientation" component={LazyOrientation} />
                <Route path="/device/motion" component={LazyDeviceMotion} />
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
          <AppUpdate />
        </Router>
      </AppStatusProvider>
    </div>
  );
};

export default App;
