import '../App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import IntentionsForm from './IntentionsForm';
import Graph from './Graph';
import NewEntryForm from './NewEntryForm';




function App() {
  const [user, setUser] = useState(null)
  const [entries, setEntries] = useState([])
  const [affirmation, setAffirmation] = useState("")
  const [intentions, setIntentions] = useState([])
 

  
 

  // useEffect(()=>{
  //   fetch("https://www.affirmations.dev/")
  //   .then((r) => r.json())
  //   .then((data) => console.log(data))
  // },[])

  useEffect(() => {
    fetch("/affirmations")
    .then(response => response.json())
    .then(data => setAffirmation(data.affirmation))
  },[])


 

  useEffect(() => {
    fetch("/entries")
      .then((r) => r.json())
      .then((data) => setEntries(data));
  }, []);
  
  
  useEffect(() => {
    fetch("/me/intentions")
      .then((r) => r.json())
      .then((data) => setIntentions(data));
  }, []);
console.log(intentions)


  useEffect(() => {
    fetch("/me").then((r) => {
      if(r.ok) {
        r.json().then((data) => setUser(data));
      }
    })
  },[])
  
  if (!user) return <Login setUser={setUser} user={user} />;

  


  
  



  return (
    <div className='App'>
      <Header setUser={setUser} user={user}/>
      {affirmation}
      <Routes>
        <Route path="/intentions" element={<IntentionsForm user={user} intentions={intentions} setIntentions={setIntentions}/>} />
        <Route path="/graph" element={<Graph/>}/>
        <Route path="/new-entry" element={<NewEntryForm user={user} entries={entries} setEntries={setEntries}/>} />
      </Routes>

    </div>

  );
}

export default App;

