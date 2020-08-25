import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/800px-Logo_Netflix.png"
        alt="Netflix Logo"
        className="nav__logo"
      />

      <img
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Avatar"
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
