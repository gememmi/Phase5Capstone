import React from 'react';


export default function WelcomePage({ user}){
    return (
        <div className="welcome-page">
            <h2>Welcome {user.username} </h2>
        </div>
    )
}