import { useState } from 'react'

function SignupForm({setUser}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [phone, setPhone] = useState('')
    const [symbol, setSymbol] = useState('')
    const [errors, setErrors] = useState('')

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
            passwordConfirm: passwordConfirm,
            email,
            phone,

        }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
            (console.log(errors))
      }
    });
}

    return (
        <div className="sigup-screen">
            <h1>Sign Up</h1>
        <div className="signup-form">
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="text" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="text" placeholder="Password-Confirmation"required value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
        <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <button type="submit">Submit</button>
        </form>
        
        </div>
        <br/>
        <select>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        </select>
        </div>
        
    )
}

export default SignupForm;
