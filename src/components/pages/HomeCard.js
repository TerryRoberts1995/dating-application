import React, { useState } from 'react';
import axios from 'axios'


export default function Card() {
    const [cardInfo, setCardInfo] = useState([]);
    const getCardInfo = () => {
        axios.get("https://dating-application-heroku.herokuapp.com/profiles")
            .then(res => {
                setCardInfo({ ...res.data })
            })
            .catch(error => console.log(error))
    }
    console.log(cardInfo)

    const [id, bio, age, fullname, gender, picture, username] = cardInfo;

    return getCardInfo()(
        <div key={id} className="card-wrapper">
            <div className="card-image">
                <img src={picture} alt="" />
            </div>

            <div className="card-title">
                <h2>{`${username}`}</h2>
            </div>

            <div className="card-details">
                <h6>{`Name: ${fullname}`}</h6>
                <h6>{`Age: ${age}`}</h6>
                <h6>{`Gender: ${gender}`}</h6>
                <h6 id="bio">Bio</h6>
                <p>{bio}</p>
            </div>
        </div>
    )
}