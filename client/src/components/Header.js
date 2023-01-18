import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

function Header({ setUser, user, moodData, setMoodData}){
  const navigate = useNavigate();
    
  function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
            navigate("/login")
          }
        });
    }


    


    return(
        <div className="header">
          <h3>Star Bright</h3>
            <NavLink className="nav-link" to="/new-entry" user={user} end>
              <button>New Entry</button>
            </NavLink>
            <NavLink className="nav-link" to="/graph" end>
              <button>My Mood Graph</button>
            </NavLink>
            <NavLink className="nav-link" to="/intentions">
              <button>My Daily Intentions</button>
            </NavLink>
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
    )
}


export default Header;

// {forums.map((page) => {
//   return <Route path={`/${page.id}`} element={<ForumPage key={page.id} user={user} page={page} handleForumState={handleForumState} handleUserState={handleUserState}/>} />
// })}