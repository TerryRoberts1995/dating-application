import React from 'react'
import MockData from '../../MockData.json'
import '../../styles/Home.css'

export default function Home() {
    const mapThis = array => {
        return array.map(obj => {
            return (
                <div className="card-wrapper">
                    <div className="card-image">
                        {/* {obj.picture} Needs to be a image*/}
                    </div>
                    <div className="card-title">
                        {obj.fullname}
                    </div>

                    <div className="card-bio">
                        {obj.bio}
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            {mapThis(MockData)}
        </div>
    )
}