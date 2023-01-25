import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

function Header({ setUser, user, moodData, setMoodData, affirmation}){
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
          <div>
          <h1>Star Bright</h1>
    
          </div>
          <div className="nav-div">
          <NavLink to='/welcome'>
              <button className="nav-link">Welcome</button>
            </NavLink>
            <NavLink to="/new-entry" user={user} end>
              <button className="nav-link" >Moods</button>
            </NavLink>
            <NavLink to="/graph" end>
              <button className="nav-link">My Mood Graph</button>
            </NavLink>
            <NavLink to="/intentions">
              <button className="nav-link">My Daily Intentions</button>
            </NavLink>
          <NavLink to="/login">
          <button className="nav-link"onClick={handleLogoutClick}>Logout</button>
          </NavLink>
          </div>
          <p className="affirmation"> &#10024; <i>{affirmation}</i> &#10024;</p>
        </div>
    )
}


export default Header;

// {forums.map((page) => {
//   return <Route path={`/${page.id}`} element={<ForumPage key={page.id} user={user} page={page} handleForumState={handleForumState} handleUserState={handleUserState}/>} />
// })}