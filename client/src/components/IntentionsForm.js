import React, { useState } from 'react';
import IntentionsCard from './IntentionsCard';


export default function IntentionsForm({user, intentions, setIntentions}){
const [ contents, setContents] = useState('')



let newIntent = {
    content: contents
}


function clear(){
    setContents('');
}
  function handleSubmit(e){
    e.preventDefault();
    fetch('/intentions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
       },
    body: JSON.stringify(newIntent) 
    })
    .then((r) => r.json())
    .then((data) => {setIntentions([...intentions, data])
    });
    setContents('');
    clear()
  }

 





const intentMap = intentions?.map((intent) =>{
   return (

   <IntentionsCard key={intent.id} intent={intent} setIntentions={setIntentions} intentions={intentions} />

   )
    
})
  return(
    <>
    <div className="intentions">
        <h2>What intentions would you like to set for the day, {user.username}?</h2>
        <form className="intent-form" onSubmit={handleSubmit}>
            <input type="text" className="new-intent" placeholder=" Add New Intention" value={contents} onChange={(e) => setContents(e.target.value)}></input>
            <button type="submit" className="new-intent-btn"  >Submit</button>
        </form>
        <div className="map">
        <p>{intentMap}</p>
        </div>
    </div>
    
{/* <div className="intent-dash">

</div> */}
</>
  )
}