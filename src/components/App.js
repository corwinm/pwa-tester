import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "components/App.scss";
import Navbar from "components/Navbar";
import About from "components/About";
import Home from "components/Home";
import Geolocation from "components/Geolocation";
import Footer from "components/Footer";
import Notifications from "components/Notifications";
import AppUpdate from "components/AppUpdate";
import { AppUpdateContext } from "context/AppUpdateContext";
import useAppUpdateAvailable from "custom-hooks/useAppUpdateAvailable";
import DeviceOrientation from "components/DeviceOrientation";
import DeviceMotion from "components/DeviceMotion";

const App = () => {
  const appUpdateAvailable = useAppUpdateAvailable();
  return (
    <div className="App">
      <AppUpdateContext.Provider value={appUpdateAvailable}>
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/geolocation" component={Geolocation} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/device/orientation" component={DeviceOrientation} />
          <Route path="/device/motion" component={DeviceMotion} />

          <Footer />
          <AppUpdate />
        </Router>
      </AppUpdateContext.Provider>
    </div>
  );
};

export default App;
