import React from "react";
import { Link } from "react-router-dom";
import { getProfile, handleLogout } from "../utils/Utils";

const Landing = () => {
  const profile = getProfile();

  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-4">
        <a href="https://rubato.no/" className="brand-logo center">
          <b>rubato.</b>
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <i style={{ marginLeft: "5px" }} className="material-icons">
              account_circle
            </i>
          </li>
          {profile && (
            <li>
              <span style={{ fontWeight: "bold", marginLeft: "5px" }}>
                {profile.user.name}
              </span>
            </li>
          )}
        </ul>
        <ul className="right hide-on-med-and-down">
          {profile ? (
            <li>
              <Link to="/login" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          <li>
            <a href="https://rubato.no/">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Landing;
