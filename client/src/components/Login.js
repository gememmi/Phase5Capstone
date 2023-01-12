import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'




function Login({ setUser, user }){

const [showLogin, setShowLogin]= useState(true)

    return(
      <div classNaame= "login">
        <div className="title">
        <h1>Star Bright</h1>
        </div>
        {showLogin ?
       <div className="login-form">
         <LoginForm setUser={setUser} user={user}/>
            <br />
            <p>Want to join and create an account?
            <button id="signup-btn" onClick={() => setShowLogin(false)}>
                 Sign up
            </button>
            </p>            
       </div>
       :
       <div className="signup-form">
        <SignupForm setUser={setUser} user={user} />
            <p className="existing-account" >
                Already have an account?
                <button className="login-btn" onClick={() => setShowLogin(true)}>
                    Log in
                </button>
            </p>
       </div>
       }
    

      </div>
    )
}

export default Login;
