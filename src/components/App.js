import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import About from "components/About";
import Home from "components/Home";
import Geolocation from "components/Geolocation";
import Footer from "components/Footer";
import Notifications from "components/Notifications";
import AppUpdate from "components/AppUpdate";
import { AppStatusContext } from "context/AppStatusContext";
import useAppStatus from "custom-hooks/useAppStatus";
import DeviceOrientation from "components/DeviceOrientation";
import DeviceMotion from "components/DeviceMotion";
import OfflineIndicator from "components/OfflineIndicator";
import Camera from "components/Camera";
import ErrorBoundary from "./ErrorBoundary";
import RouteTrace from "./RouteTrace";

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
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/geolocation" component={Geolocation} />
              <Route path="/notifications" component={Notifications} />
              <Route path="/camera" component={Camera} />
              <Route path="/device/orientation" component={DeviceOrientation} />
              <Route path="/device/motion" component={DeviceMotion} />
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
