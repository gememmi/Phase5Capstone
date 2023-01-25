import React from 'react';
import EntryCard from './EntryCard';

export default function EntryDash({ entries, setEntries, mood, setMood, moodData, setMoodData}){
      
let display = [...entries].reverse();
let userEntriesMap = display.map((entry) =>{
  
  return (
  <EntryCard key={entry.id} entries={entries} setEntries={setEntries} entry={entry} mood={mood} setMood={setMood} setMoodData={setMoodData} moodData={moodData}/> 
  )
})
    return (
     
        <div className="my-entries">
               {userEntriesMap} 
        </div>
        
    )
}