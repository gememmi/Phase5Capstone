import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function SignupForm({setUser, user }){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    // const [phone, setPhone] = useState('')
    const [errors, setErrors] = useState('')
    // const [avatar, setAvatar] = useState('')
    const navigate = useNavigate();

function handleSubmit(e){
    e.preventDefault();
    setErrors([])
    fetch('/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",   
        },
        body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirm,
            email,
            // phone_num: phone,
            // avatar: avatar
        }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
            (console.log(errors))
      }
      navigate("/welcome")
    });
}
console.log(avatar)

    return (
        
        <div className="signup-screen">
            
            <h1>SIGN UP</h1>
            
        <div className="signup-form">
        <form onSubmit={handleSubmit}>

        <input className="signup-input"
        type="text" 
        placeholder="Username" 
        required value={username} 
        onChange={(e) => setUsername(e.target.value)}
        />
        <input  className="signup-input"
        type="password" 
        placeholder="Password" 
        required value={password} 
        onChange={(e) => setPassword(e.target.value)}
        />
        <input className="signup-input"
        type="password"
         placeholder="Password-Confirmation"
         required value={passwordConfirm} 
         onChange={(e) => setPasswordConfirm(e.target.value)}
         />
        <input className="signup-input"
        type="text" 
        placeholder="Email" 
        required value={email} 
        onChange={(e) => setEmail(e.target.value)}
        />
        <input className="signup-input"
        type="text" 
        placeholder="Phone Number" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)}
        />
        <select className="signup" value={avatar} 
        abel="avatar" 
        onChange={(e)=> setAvatar(e.target.value)}
        >
            <option>Choose avatar</option>
            <option value="cloud">Cloud</option>
            <option value="Thunder">Thunder</option>
            <option value="Rainbow">Rainbow</option>
            <option value="Sun">Sun</option>
            <option value="Moon">Moon</option>
        </select>
        {/* TRIED TO DO BUTTOSN BUT THEY DIDNT WORK :/ */}
        {/* <button value={avatar} onChange={(e) => setAvatar(e.target.value)} name="cloud">Cloud</button>
        <button value={avatar} onChange={(e) => setAvatar(e.target.value)} name="thunder">Thunder</button>
        <button value={avatar} onChange={(e) => setAvatar(e.target.value)} name="rainbow">Rainbow</button>
        <button value={avatar} onChange={(e) => setAvatar(e.target.value)} name="sun">Sun</button>
        <button value={avatar} onChange={(e) => setAvatar(e.target.value)} name="moon">Shooting Star</button> */}
        <button className="signup-submit"type="submit">Submit</button>
        </form>
        </div>

        </div>
        
    )
}

export default SignupForm;
