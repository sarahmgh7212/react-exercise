import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav>
        <div>
          <a href="">
            <Link to="/">Home</Link>
          </a>
          <a href="">
            <Link to="/about">About</Link>
          </a>
          <a href="">
            <Link to="/contact">Contact Us</Link>
          </a>
        </div>
      </nav>
    </div>
  );
};
