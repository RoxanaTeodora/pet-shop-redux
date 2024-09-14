import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../assets/logo-pet-store.svg";
import { useRef } from "react";

export const Navbar = (props) => {
  const dropdownRef = useRef(null);
  const navToggleRef = useRef(null);

  const handleToggle = (event) => {
    event.currentTarget.classList.toggle("change");
    if (dropdownRef.current) {
      dropdownRef.current.classList.toggle("show");
    }
  };

  return (
    <div
      style={{
        backgroundColor: props.color ?? "transparent",
        color: props.textColor ?? "black",
      }}
    >
      <ul className="navbar">
        <li className="list">
          <Link to="/">
            <img src={logo} alt="Logo Pet Store" className="logo-img" />
          </Link>
        </li>
        <li className="list">
          <Link to="/about">About</Link>
        </li>
        <li className="list">
          <Link to="/">Pets</Link>
        </li>
        <li className="list">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="list-admin">
          <Link to="/userHome">Admin</Link>
        </li>
      </ul>

      <div className="container-phone">
        <Link to="/">
          <img src={logo} alt="Logo Pet Store" className="logo-img-nav" />
        </Link>
        <div className=" dropbtn" onClick={handleToggle} ref={navToggleRef}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <div id="myDropdown" className="dropdown-content" ref={dropdownRef}>
            <Link to="/about">About</Link>
            <Link to="/">Pets</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/userHome">Admin</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
};
