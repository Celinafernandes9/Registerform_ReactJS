import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const NavLinkStyles = ({ isActive }) => {
    return {
      fontweight: isActive ? "bolder" : "normal",
      color: isActive ? "#A995BB" : "#E47C8E",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <Link className="navbar-brand" href="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                className="nav-link text-uppercase"
                style={NavLinkStyles}
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase"
                style={NavLinkStyles}
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-primary btn-light my-2 my-sm-0"
              type="submit"
            >
              <NavLink
                className="nav-link text-uppercase"
                style={NavLinkStyles}
                to="/"
              >
                Login
              </NavLink>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};
