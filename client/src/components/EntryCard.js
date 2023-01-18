import React, { useState } from 'react';

export default function EntryCard({entry, entries, setEntries}){
const [ showInput, setShowInput] = useState(true)
const [ editTitle, setEditTitle] = useState('')
const [ editContent, setEditContent] = useState('')
const [ editMood, setEditMood] = useState('')


function handleDelete(){
    fetch(`/entries/${entry.id}`, {
        method:'DELETE',
    })
    const updatedArray = entries?.filter(e => {
        return e.id !== entry.id
    })
    setEntries(updatedArray)
}
function handlePatch(){
    fetch(`/entries/${entry.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 
    },
    body: JSON.stringify({
        title: editTitle,
        content: editContent,
        score: editMood
    } )
    })

}




    return (
          <div className="entry-card" onDoubleClick={() => setShowInput(!showInput)}>
            {showInput  ?
            <>
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
            <p>{entry.mood_rating.score}</p>
            <button onClick={handleDelete}>Delete</button>
            </> :
            <form onSubmit={handlePatch}>
                <input type= "type" 
                placeholder="Title" 
                value={editTitle} 
                onChange={(e) => setEditTitle(e.target.value)}
                 />
                 <input type="type"
                 placeholder="content"
                 value={editContent}
                 onChange={(e) => setEditContent(e.target.value)} />
                 <button type="submit">Edit</button>
                 <select value={editMood} onChange={(e) => setEditMood(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                 </select> 
            </form>
            }

            </div>
          )
    
}