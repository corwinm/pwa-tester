import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import Home from "components/Home";
import Footer from "components/Footer";
import AppUpdate from "components/AppUpdate";
import { AppStatusContext } from "context/AppStatusContext";
import useAppStatus from "custom-hooks/useAppStatus";
import OfflineIndicator from "components/OfflineIndicator";
import ErrorBoundary from "./ErrorBoundary";
import RouteTrace from "./RouteTrace";

const LazyAbout = lazy(() => import("components/About"));
const LazyGeolocation = lazy(() => import("components/Geolocation"));
const LazyNotifications = lazy(() => import("components/Notifications"));
const LazyCamera = lazy(() => import("components/Camera"));
const LazyDeviceOrientation = lazy(() =>
  import("components/DeviceOrientation")
);
const LazyDeviceMotion = lazy(() => import("components/DeviceMotion"));

const App = () => {
  const appUpdateAvailable = useAppStatus();
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <RouteTrace />
        <AppStatusContext.Provider value={appUpdateAvailable}>
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
                <Route
                  path="/device/orientation"
                  component={LazyDeviceOrientation}
                />
                <Route path="/device/motion" component={LazyDeviceMotion} />
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
          <AppUpdate />
        </AppStatusContext.Provider>
      </Router>
    </div>
  );
};

export default App;
