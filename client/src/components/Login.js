import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

function Login({ setUser, user }){

const [showLogin, setShowLogin]= useState(true)
const [color, setColor] = useState('#000')
const [className, setClassName] = useState("initial")
const word = "Star Bright"


const changeColor = () => {
  for (let i = 0; i < word.length; i++) {
    setTimeout(() => {
      setColor("#f00");
    }, i * 100);
  }
};

const resetColor = () => {
  for (let i = 0; i < word.length; i++) {
    setTimeout(() => {
      setColor("#000");
    }, i * 100);
  }
};

const changeClass = () => {
  setClassName("hover")
}
const resetClass = () => {
  setClassName("initial")
}

    return(
      <div className= "login">
        <div className="title">
        {/* <h1 className="title">Star Bright</h1> */}
        <h1 className={`word ${className}`} onMouseOver={changeClass} onMouseOut={resetClass}>
        {word.split("").map((letter, i) => (
          <span key={i}>
            {letter}
          </span>
        ))}
      </h1>
        </div>
        <div className="star-div">
        <img className="star"src="./IMAGES/STARshollow.png"/>
        </div>
        
        
        {showLogin ?
        <>

       <div className="login-form">
         <LoginForm setUser={setUser} user={user}/>
            <br />
            <p className="join"><i>Want to join and create an account?</i>
            <button id="signup-btn" onClick={() => setShowLogin(false)}>
                 Sign up
            </button>
            </p>            
       </div>
       </>
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
