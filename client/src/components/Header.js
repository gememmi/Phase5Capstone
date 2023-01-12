import React from 'react';
import { NavLink } from "react-router-dom";

function Header({ setUser, user }){
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
    }


    return(
        <div className="header">
          <h3>Star Bright</h3>
            <NavLink className="nav-link" to="/logout" end>
            <button onClick={handleLogoutClick}>Logout</button>
            </NavLink>
            <NavLink className="nav-link" to="/new-entry" user={user} end>
              <button>New Entry</button>
            </NavLink>
            <NavLink className="nav-link" to="/graph" end>
              <button>My Mood Graph</button>
            </NavLink>
            <NavLink className="nav-link" to="/intentions">
              <button>My Daily Intentions</button>
            </NavLink>
            

        </div>
    )
}


export default Header;