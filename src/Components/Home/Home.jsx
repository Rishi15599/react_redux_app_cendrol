import { useEffect, useState } from "react"
import React from "react";
import 'reactjs-popup/dist/index.css'
import './Home.css'
import Card from "../Card/Card";

const Home = () => {
  let [data, setData] = useState([])

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
  const categories = data;

  return (
    <div className="main-div">
      <h1 className="header-content">Chuck Norries</h1>
      <div className='main-card-jokes'>
        {categories.map((category) => (
            <Card category={category} onClick={() => { }}/>
        ))}
      </div>
    </div>
  )
}

export default Home