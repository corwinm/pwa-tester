import { AppStatusContext } from "context/AppStatusContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppUpdate from "components/AppUpdate";
import ErrorBoundary from "./ErrorBoundary";
import Footer from "components/Footer";
import Home from "components/Home";
import Navbar from "components/Navbar";
import OfflineIndicator from "components/OfflineIndicator";
import React, { Suspense, lazy } from "react";
import RouteTrace from "./RouteTrace";
import useAppStatus from "custom-hooks/useAppStatus";

const LazyAbout = lazy(() => import("components/About"));
const LazyCamera = lazy(() => import("components/Camera"));
const LazyDeviceMotion = lazy(() => import("components/DeviceMotion"));
const LazyDeviceOrientation = lazy(() =>
  import("components/DeviceOrientation")
);
const LazyGeolocation = lazy(() => import("components/Geolocation"));
const LazyNotifications = lazy(() => import("components/Notifications"));

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
