import React, { useEffect, useState } from 'react';

export default function IntentionCard({user, intentions, setIntentions, intent}){
  const [ showInput, setShowInput] = useState(true)
  const [ edit, setEdit]= useState('')
  
  
  function handleDelete(){
    fetch(`/intentions/${intent.id}`, {
        method: 'DELETE',
    })
    const updatedArray = intentions?.filter(i =>{
        return i.id !== intent.id
    })
    setIntentions(updatedArray);
  }

  function handlePatch(){
    fetch(`/intentions/${intent.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json',
    },
 body: JSON.stringify({content: edit}) 
  })
  
  const updatedArray = intentions?.filter(i =>{
      return i.id !== intent.id
  })
  }
  
return (
<div onDoubleClick={() => setShowInput(!showInput)}>
    {showInput ?
    <>
    <p>{intent.content}</p>
    <button onClick={handleDelete}>Delete</button> 
    </>  :
  <form onSubmit={handlePatch}>
    <input type="type" placeholder="Edit Intention" value={edit} onChange={(e) => setEdit(e.target.value)}></input>
    <button type="submit">Edit</button>
</form> }
</div>
)

}