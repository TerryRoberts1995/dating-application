import React from 'react'
import MockData from '../../MockData.json'
import '../../styles/Home.css'

export default function Home() {
    const mapThis = array => {
        return array.map(obj => {
            return (
                <div key={obj.id} className="card-wrapper">
                    <div className="card-image">
                        {/* {obj.picture} Needs to be a image*/}
                    </div>
                    <div className="card-title">
                        <h2>{`${obj.username}`}</h2>

                    </div>

                    <div className="card-details">
                        <h6>{`Name: ${obj.fullname}`}</h6>
                        <h6>{`Age: ${obj.age}`}</h6>
                        <h6 id="bio">Bio</h6>
                        <p>{obj.bio}</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="home-container">
            {mapThis(MockData)}
        </div>
    )
}