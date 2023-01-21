import { useState} from 'react';
import { useNavigate } from 'react-router-dom'




function LoginForm({setUser, user}){
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
 const [errors, setErrors] = useState('')

 const navigate = useNavigate();





 function handleSubmit(e){
    e.preventDefault();
    fetch('/login', {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",  
        },
        body: JSON.stringify({username, password})
    }).then((r) => {
        if(r.ok){
            r.json().then((data) => {
                setUser(data)
                navigate("/me")
            });
                
        } else {
            r.json().then((data) => setErrors(data.errors));
            console.log(errors)
        }
    });
 }




 return(
    <div className="login-screen">
        <h1>LOG IN</h1>
    <div className="login-form">
    <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" className="login-input" placeholder="Username"  autocomplete="username"required value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" className="login-input"placeholder="Password" autocomplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <button type="submit" className="lgn-btn">LOG IN</button>
    </form>
    </div>

    </div>
 )

}

export default LoginForm;