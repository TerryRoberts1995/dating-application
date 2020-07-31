import React, {useState} from 'react'
import { navigate } from 'hookrouter'
import Cookie from "js-cookie";
import '../../styles/sign-in.css';

export default function   Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorText, setErrorText] = useState("")

const handleSubmit = e => {
e.preventDefault();
  if (username === "terryb" || 'terryr' || 'preston' || 'tyler' && password === "1111") {
    Cookie.set("username", username, { expires: 14 });
    Cookie.set("password", password);
    return navigate("/home")
}else {
  setErrorText("wrong username or password")
}
}

return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
      <div class="container">
        <div>
        <label for="uname"><b>Username</b></label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        </div>
        <div>
        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        /></div>
        <div>
        <button value="Login">Submit</button>
        </div>
      </div>
      </form>
      <p>{errorText}</p>
    </div>
  )

}


 

  
    
    
        
    

  