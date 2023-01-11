import '../App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './Header'
import Login from './Login'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if(r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  },[])

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className='App'>
      <Header setUser={setUser}/>
      <Routes>
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>

  );
}

export default App;
