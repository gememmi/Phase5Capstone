import React, {useState} from 'react';
import {Chart} from 'chart.js/auto'
import { Line } from 'react-chartjs-2';




export default function Graph({ moodData, setMoodData, user}){

    // console.log(moodData[0].users[0].id)
    // console.log(moodData[0].score)
    // console.log(moodData)
    


if (moodData.length === 0) {return null}
const dataLabel = moodData.map(el =>  `${el.created_at}`)
const dataData = moodData.map(el =>  `${el.score}`)
    const state = {
        labels: dataLabel,
        datasets: [
          {
            label: `${user.username}'s moods`,
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: dataData
          }
        ]
      }

    return(
        <div>
       <Line
          data={state}
          options={{
            title:{
              display:true,
              text: `${user.username}`,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
        
    )
    
}

