import React from 'react';

export default function Card(props) {
    const card = props.cardInfo.map(obj => {
        const { id, bio, age, fullname, gender, picture, username } = obj;

        return (
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
    })
    return <div className="main-card-container">{card}</div>
}