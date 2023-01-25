import React from 'react';


export default function WelcomePage({ user }){
    return (
        <div className="welcome-page">
            <h2>Welcome to Star Bright, {user.username} </h2>
            <p> Here is a space for you to check in with yourself.
                How is your mood today? 
                </p>
             <br/>
             <p>Create new entries describing your mood and your thoughts. 
                    Rate your mood on a scale of 1 to 5, with 1 being the lowest mood and 5  being the highest.
                </p> 
            <br/>
                <p> You can track your mood over time using our graph. You can create daily intentions for yourself as well. How would you like your day to look? 
                
                </p>
           
        </div>
    )
}