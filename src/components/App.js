import React from "react";
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
import useAppUpdateAvailable from '../custom-hooks/useAppUpdateAvailable';

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
