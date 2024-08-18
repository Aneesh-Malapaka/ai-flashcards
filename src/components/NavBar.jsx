import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from '../hooks/AuthLogic';  

function NavBar() {
  // Call AuthLogic once at the top
  const { user, signOutUser } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark flex gap-10 justify-between py-6 px-5">
      <div className="logo text-xl font-bold">Learning With Cards</div>
      <div className="links flex gap-6">
        <div className="pageLinks flex justify-evenly gap-7">
          <NavLink
            to="/"
            className={(e) => (e.isActive ? "active" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/home"
            className={(e) => (e.isActive ? "active" : "")}
          >
            Home
          </NavLink>
          {!user && (
            <NavLink
              to="/auth"
              className={(e) => (e.isActive ? "active" : "")}
            >
              Sign In
            </NavLink>
          )}
        </div>
        <div className="iconLinks flex gap-6">
          {user && (
            <NavLink
              to={`/profile/${user.uid}`}
              className={(e) => (e.isActive ? "active" : "")}
            >
              Profile
            </NavLink>
          )}
          {user && ( 
            <button onClick={signOutUser}>
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
