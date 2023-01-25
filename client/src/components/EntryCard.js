import React, { useState } from 'react';

export default function EntryCard({entry, entries, setEntries, setMoodData, moodData}){
const [ showInput, setShowInput] = useState(true)
const [ editTitle, setEditTitle] = useState(entry.title)
const [ editContent, setEditContent] = useState(entry.content)
const [ editMood, setEditMood] = useState(entry.mood_rating)



function handleDelete(){
    
    fetch(`/entries/${entry.id}`, {
        method:'DELETE',
    })
    const updatedArray = entries?.filter(e => {
        return e.id !== entry.id
    })
    setEntries(updatedArray)
}


function handlePatch(e){
    e.preventDefault()
    // console.log(editMood)
    const newE = entries.filter((e) =>{
        return e.id === entry.id
    }
    )
    console.log(newE[0])
    const updatedEntries = [...entries]
    const index = updatedEntries.indexOf(newE[0])
    console.log(updatedEntries)

    const updatedMoodData = [...moodData]

    const entryMood = {
        created_at: newE[0].mood_rating.created_at,
        id: newE[0].mood_rating.id,
        score: newE[0].mood_rating.score

    }
   


    console.log(moodData[0], entryMood)
     
    const filteredMoodData = moodData.filter(m => {
        return m.score === newE[0].mood_rating.score
    })
    const moodDataIndex = updatedMoodData.indexOf(filteredMoodData[0])
    // console.log(filteredMoodData)
    // console.log(moodDataIndex)

    // updatedEntries.forEach((e, i) => {
    //     console.log(i)
    //     if(e.id === entry.id) {
    //          setIndex(i)
    //          return true
    //     }
    // })


    console.log(index)
    
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
    .then((r) => r.json())
    .then(data => {
        updatedEntries[index] = data.entry
        // console.log(updatedEntries)


        setEntries(updatedEntries)

        // console.log(updatedEntries)
        updatedMoodData[moodDataIndex] = data.mood_rating
        setMoodData(updatedMoodData)


    })

}

console.log(entry.date)
console.log(entry.created_at)



    return (
          <div className="entry-card" onDoubleClick={() => setShowInput(!showInput)}>
            {showInput  ?
            <>
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
            <p>{entry.mood_rating.score}</p>
            <p>{entry.date}</p>
            <div id="delete">
            <button className="delete" onClick={handleDelete}>Delete</button>
            </div>
            </> :
            <div className="edit-div">
            <form onSubmit={handlePatch}>
                <input type= "type" 
                placeholder="Title" 
                value={editTitle} 
                onChange={(e) => setEditTitle(e.target.value)}
                 />
                 <input type="type"
                 placeholder="content"
                 value={editContent}
                 onChange={(e) => setEditContent(e.target.value)}
                  />
                 <button type="submit" onClick={() => setShowInput(!showInput)}>Edit</button>
                 <select value={editMood} onChange={(e) => setEditMood(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                 </select> 
            </form>
            </div>
            }

            </div>
          )
    
}