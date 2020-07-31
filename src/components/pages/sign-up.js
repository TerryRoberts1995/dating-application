import React, { useState } from 'react';
import '../../styles/signup.css';
import axios from "axios";

export default function SignUp() {

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ bio, setBio ] = useState("")
    const [ fullname, setFullName ] = useState("")
    const [ pictureUrl, setPictureUrl ] = useState("")
    const [ age, setAge ] = useState("")
    const [ gender, setGender ] = useState("")
    const [ didCreate, setDidCreate ] = useState(true)

    function createProfile(e) {
        e.preventDefault()
    
        axios.post("https://dating-application-heroku.herokuapp.com/profile", {
            username,
            password,
            bio,
            fullname,
            picture: pictureUrl,
            age,
            gender
        })
        .then(res => {
            console.log(res)
            setDidCreate(false)
        }).catch(err => {
            console.log(err)
        })
        return <div>Profile created, welcome!</div>
    }

    return (
        <div className="form-wrapper"> 
            {didCreate ? 
            <form className="create-profile-form">

                <input type="text" 
                    placeholder="Username"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                />

                <input type="password" 
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />

                <input type="textarea" 
                    placeholder="Bio"
                    onChange={e => setBio(e.target.value)}
                    value={bio}
                />
                <input type="text" 
                    placeholder="Full Name"
                    onChange={e => setFullName(e.target.value)}
                    value={fullname}
                />

                <input type="text" 
                    placeholder="Picture url"
                    onChange={e => setPictureUrl(e.target.value)}
                    value={pictureUrl}
                />

                <input type="text" 
                    placeholder="Age"
                    onChange={e => setAge(Number(e.target.value))}
                    value={age}
                />

                <input type="text"
                    placeholder="Gender"
                    onChange={e => setGender(e.target.value)}
                    value={gender}
                />

                <button onClick={e => createProfile(e)}>Create Profile</button>
            </form> : <div className="form-wrapper">Account created, welcome</div> }

        </div > 
    )
} 