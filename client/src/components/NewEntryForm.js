import React, { useState } from 'react';
import EntryCard from './EntryCard';
import EntryDash from './EntryDash';
import { useNavigate } from 'react-router-dom'


export default function NewFormEntry({user, entries, setEntries, setMoodData, moodData}){
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [mood, setMood] = useState('1')
const [showInput, setShowInput] = useState(false)
const navigate = useNavigate();

// let newMoodEntry = {
//     title: title,
//     content: content,
//     score: mood,
//     user_id: user.id
// }
// const data = useRef(entries);


function handleSubmit(e){
    e.preventDefault();

    let newMoodEntry = {
    title: title,
    content: content,
    score: mood,
    user_id: user.id
    }
        fetch('http://localhost:3000/entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
       },
       body: JSON.stringify(newMoodEntry)
       })
       .then((r) => r.json())
       .then(data =>  {
        // setEntries(entries => [...entries, data.entry])
        setEntries(prevEntries => [...prevEntries, data.entry]
          );
        setMoodData(moodData => [...moodData, data.mood_rating])
        // console.log(data)
        // navigate("/new-entry")
        setTitle('');
        setContent('');
        setMood('1');
    
    })
    .catch(error => {
        console.error('Error creating new entry:', error);
      });

    }
    //    setTitle('');
    //    setContent('');
    

    return(
        <div>
            <div className="btn-div">
                <button className="entry" 
                onClick={() => setShowInput(!showInput)}
                >
                { showInput ? "Show All My Moods" : "Create new Entry"}
                </button>
    </div>
    { showInput ?
    <div className="entry-div">
    <h2>What is on your mind, {user.username}?</h2>
    
    <form className="new-entry-form" onSubmit={handleSubmit}>
        <input  className="mood-title" type="text" placeholder="Enter your mood" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea  className="mood-note" placeholder="Enter a note" value={content} onChange={(e) => setContent(e.target.value)}></textarea>

        <select value={mood} onChange={(e) => setMood(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button className="submit-btn" type="submit">Submit</button>
    </form> </div> :
  
  <EntryDash entries={entries} setEntries={setEntries} mood={mood} setMood={setMood} setMoodData={setMoodData} moodData={moodData}/>
}
        
         
        
        </div>
        
    )
}