import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './HomeCard'
// import MockData from '../../MockData.json'
import '../../styles/Home.css'

export default function Home() {
    const [user, setUserInfo] = useState([]);

    const getCardInfo = () => {
        axios.get("https://dating-application-heroku.herokuapp.com/profiles")
            .then(res => setUserInfo(res.data))
            .catch(error => console.log(error))
    }


    useEffect(() => {
        getCardInfo()
    }, [])

    return (
        <div className="home-container">

            <Card className="hello" cardInfo={user} />
        </div>
    )
}