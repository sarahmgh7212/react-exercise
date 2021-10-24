// https://learnetto.com/blog/react-form-validation
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
