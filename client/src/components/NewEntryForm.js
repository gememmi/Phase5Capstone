import React, { useState } from 'react';


export default function NewFormEntry({user, entries, setEntries}){
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [mood, setMood] = useState('1')

let newMoodEntry = {
    title: title,
    content: content,
    score: mood
}

// let newMoodEntry ={
//     title: "",
//     content: "",
//     user_id: user.id,
//     mood_rating_id: 1,
//    };
//    const [logEntry, setLogEntry] = useState(newMoodEntry)
// console.log("newmoodentry: ", newMoodEntry)
    function handleSubmit(e){
        e.preventDefault();
        fetch('/entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
       },
       body: JSON.stringify(newMoodEntry)
       })
       .then((r) => r.json())
       .then(data =>  setEntries([...entries, data]))
       setTitle('');
       setContent('');
    }
    
  console.log(title)


   


    return(
        <div>
            <h2>What is on your mind, {user.username}?</h2>
            <form className="new-entry-form" onSubmit={handleSubmit}>
                <input className="mood-title" type="text" placeholder="Enter your mood" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea className="mood-note" placeholder="Enter a note" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <button type="submit">Submit</button>
                <select value={mood} onChange={(e) => setMood(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </form>
        </div>
    )
}