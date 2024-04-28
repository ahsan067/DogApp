import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isTheme } from "../Redux/Actions/Actions";

export default function Navbar() {
  const { theme } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const handleTheme = () => {
    if (theme === false) {
      dispatch(isTheme(true));
    } else {
      dispatch(isTheme(false));
    }
  };

  console.log(theme);

  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="btn btn-outline-dark"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-light me-2"
              type="button"
              onClick={handleTheme}
            >
              {theme ? "Light Mode" : "Dark Mode"}
            </button>
            <button className="btn btn-outline-light me-2" type="button">
              Login
            </button>
            <button className="btn btn-outline-light" type="button">
              Sign Up
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
