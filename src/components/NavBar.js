import React from "react";
import PropTypes from "prop-types";

function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-sm bg-${props.currentMode} navbar-${props.currentMode} justify-content-between`}>
      <a className="navbar-brand" href="#">
        <i className="fa-duotone fa-pen-to-square mx-4"></i>
        <span>{props.title}</span>
      </a>
      <ul className="navbar-nav">
        <li className="nav-item mx-3">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#">
            Services
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="#">
            Join Us
          </a>
        </li>
      </ul>
      <form className="d-flex">
        <input className={`form-control me-2 searchField bg-${props.currentMode === 'light'? 'light' : 'dark'}
          text-${props.currentMode === 'light'? 'dark' : 'light'}`} type="text" placeholder="Search" />
        {/* <button className="btn btn-success" type="button">
          Search
        </button> */}
        <i className={`fa-light fa-magnifying-glass mt-2 mx-3 fs-5 text-${props.currentMode === 'light'? 'dark' : 'light'}`}></i>
      </form>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  currentMode: PropTypes.string.isRequired
};

NavBar.defaultProps = {
  title: "Logo",
  currentMode: "light"
};

export default NavBar;
