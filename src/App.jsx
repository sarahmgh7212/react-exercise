// https://learnetto.com/blog/react-form-validation
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
function App() {
  
  return(
    <Router>
      <div>
        <nav>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul> */}
          <div>
             <a href=""><Link to="/">Home</Link></a>
          <a href=""> <Link to="/about">About</Link></a>
          <a href=""><Link to="/contact">Contact Us</Link></a>
          </div>
         
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
