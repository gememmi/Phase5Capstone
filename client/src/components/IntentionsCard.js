import React, { useState } from 'react';

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
<div className="intent-card" onDoubleClick={() => setShowInput(!showInput)}>
    {showInput ?
    <>
    <div>
    <li>{intent.content}</li>
    </div>
    <button onClick={handleDelete}>Delete</button> 
    </>  
    :
  <form onSubmit={handlePatch}>
    <input type="type"
     placeholder="Edit Intention" 
     value={edit} 
     onChange={(e) => setEdit(e.target.value)}
     />
    <button type="submit">Edit</button>
</form> }
</div>
)

}