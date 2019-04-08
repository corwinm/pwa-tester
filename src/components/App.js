import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Geolocation from "./Geolocation";
import Footer from "./Footer";
import Notifications from './Notifications';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/geolocation" component={Geolocation} />
        <Route path="/notifications" component={Notifications} />
        
        <Footer />
      </Router>
    </div>
  );
};

export default App;
