import React from "react";
import BlanjaLogo from "../../../../assets/image/logo.png";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import FilterIcon from "../../../../assets/icon/filter.png";
import CartIcon from "../../../../assets/icon/cart.png";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const Navbar = () => {
  return (
    <div className="container">
      <div className="header">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ml-4">
          <Link to="#">
            <img className="navlogo m-4 pl-5" src={BlanjaLogo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 mt-4">
              <li className="nav-item m-3">
                <input
                  className="searchbar form-control mr-2 input"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </li>
              <li className="filter-button nav-item mt-3 d-flex align-items-center justify-content-center">
                <Link to="#" data-toggle="modal" data-target="#exampleModal">
                  <img src={FilterIcon} alt="filter" />
                </Link>
              </li>
              <li className="cart-button nav-item mt-3 d-flex align-items-center justify-content-center">
                <Link to="./pages/mybagfix.html">
                  <img className="mr-4" src={CartIcon} alt="cart" />
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button
                className="btn login rounded-pill mr-2"
                formAction="./pages/login.html"
                type="submit"
              >
                Login
              </button>
              <button
                className="btn border signup rounded-pill"
                formAction="./pages/signup.html"
                type="submit"
              >
                Sign Up
                {/* <a href="./pages/signup.html">Signup</a> */}
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;