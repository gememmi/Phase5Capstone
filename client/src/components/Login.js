import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

function Login({ setUser }){

const [showLogin, setShowLogin]= useState(true)

    return(
      <div classNaame= "login">
        <div className="title">
        <h1>BrainBright</h1>
        </div>
        {showLogin ?
       <div className="login-form">
         <LoginForm setUser={setUser} />
            <br />
            <p>Want to join and create an account?
            <button id="signup-btn" onClick={() => setShowLogin(false)}>
                 Sign up
            </button>
            </p>            
       </div>
       :
       <div className="signup-form">
        <SignupForm setUser={setUser}/>
            <p className="existing-account" >
                Already have an account?
                <button className="login-btn" onClick={() => setShowLogin(false)}>
                    Log in
                </button>
            </p>
       </div>
       }
    

      </div>
    )
}

export default Login;
