import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Geolocation from "./Geolocation";
import Footer from "./Footer";
import Notifications from "./Notifications";
import AppUpdate from "./AppUpdate";
import { AppUpdateContext } from "../context/AppUpdateContext";
import * as serviceWorker from "../serviceWorker";

function useAppUpdateAvailable() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [offLineReady, setoffLineReady] = useState(false);
  const [registration, setregistration] = useState(null);
  const [installPrompt, setinstallPrompt] = useState(null);
  useEffect(() => {
    const installPromptHandler = e => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setinstallPrompt(e);
      console.log("Install prompt available!", e);
    };
    window.addEventListener("beforeinstallprompt", installPromptHandler);
    return () => {
      window.removeEventListener("beforeinstallprompt", installPromptHandler);
    };
  }, []);
  useEffect(() => {
    let ignore = false;

    serviceWorker.register({
      onUpdate: registration => {
        if (ignore) return;
        console.log(
          "onUpdate called! New content after windows closed!",
          registration
        );
        setregistration(registration);
        setUpdateAvailable(true);
      },
      onSuccess: registration => {
        if (ignore) return;
        console.log("onSuccess called! Offline ready!", registration);
        setregistration(registration);
        setoffLineReady(true);
      }
    });
    console.log("serviceWorker.register called");
    return () => {
      console.log("ignore set to true");
      ignore = true;
    };
  }, []);

  useEffect(() => {
    let ignore = false;
    navigator.serviceWorker.getRegistration().then(currentRegistration => {
      if (ignore) return;
      console.log("Current sw registration", currentRegistration);
      setregistration(currentRegistration);
      setoffLineReady(!!currentRegistration);
      setUpdateAvailable(currentRegistration && !!currentRegistration.waiting);
    });
    return () => {
      ignore = true;
    };
  }, []);
  return { updateAvailable, offLineReady, registration, installPrompt };
}

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

          <Footer />
          <AppUpdate />
        </Router>
      </AppUpdateContext.Provider>
    </div>
  );
};

export default App;
