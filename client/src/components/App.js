import '../App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Intentions from './Intentions';
import Graph from './Graph';
import NewEntryForm from './NewEntryForm';


function App() {
  const [user, setUser] = useState(null)
  const [entries, setEntries] = useState([])

  useEffect(() => {
    fetch("/entries")
      .then((r) => r.json())
      .then((data) => setEntries(data));
  }, []);
  console.log(entries)
  

  useEffect(() => {
    fetch("/me").then((r) => {
      if(r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  },[])
  console.log(user)

  if (!user) return <Login setUser={setUser} user={user} />;



  return (
    <div className='App'>
      <Header setUser={setUser} user={user}/>
      <Routes>
        <Route path="/intentions" element={<Intentions user={user}/>} />
        <Route path="/graph" element={<Graph/>}/>
        <Route path="/new-entry" element={<NewEntryForm user={user} entries={entries} setEntries={setEntries}/>} />
      </Routes>
    </div>

  );
}

export default App;

