import React, { useState } from 'react';
import EntryCard from './EntryCard';


export default function NewFormEntry({user, entries, setEntries, setMoodData, moodData}){
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [mood, setMood] = useState('1')


let newMoodEntry = {
    title: title,
    content: content,
    score: mood,
    user_id: user.id
}
// const data = useRef(entries);


    function handleSubmit(){
        // e.preventDefault();
        fetch('http://localhost:3000/entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
       },
       body: JSON.stringify(newMoodEntry)
       })
       .then((r) => r.json())
       .then(data =>  {
        setEntries([...entries, data.entry])
    
        setMoodData(moodData => [...moodData, data.mood_rating])
        // console.log(data)
    })
       setTitle('');
       setContent('');
    }

    
// console.log(title)
// console.log(user)
// console.log(user.entries)
// console.log(display)
  
let display = [...entries].reverse();
  let userEntriesMap = display.map((entry) =>{
    
    return (
    <EntryCard key={entry.id} entries={entries} setEntries={setEntries} entry={entry} mood={mood} setMood={setMood} setMoodData={setMoodData} moodData={moodData}/> 
    )
  })
  

    return(
        <div>
            <h2>What is on your mind, {user.username}?</h2>
            <form className="new-entry-form" onSubmit={handleSubmit}>
                <input  className="mood-title" type="text" placeholder="Enter your mood" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea  className="mood-note" placeholder="Enter a note" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <button type="submit">Submit</button>
                <select value={mood} onChange={(e) => setMood(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </form>
            <div className="my-entries">
                {userEntriesMap}
            </div>
        </div>
        
    )
}