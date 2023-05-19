import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">MindSketch</Link>
      </div>
      <div className="items">
        {isAuthenticated && (
          <>
            <Link className="item" to="/create">Create</Link>
            <Link className="item" to="/saved">Saved Images</Link>
          </>
        )}

        {isAuthenticated ? (
          <div className="nav-user">
            <div className="user-info">
              <img className="user-img" src={user.picture} alt={user.name} />
              <p className="user-nickname">{user.name}</p>
              <Link className="button"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <Link className="button" onClick={() => loginWithRedirect()}>Login / Signup</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
