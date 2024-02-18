
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Categoryitem from './Categoryitem';


function App() {

  const [category, setCategory] = useState([])

  useEffect(() => {
    async function fetchBirds() {
      const URL = `http://localhost:5000/api/post-category`
      try {
        const res = await axios.get(URL)
        setCategory(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBirds()
  }, [])

  if (!category) {
    return <div>loading</div>
  }

  return (
    <div>
      <p>slm</p>
      {category?.map((item,index) => {
        return <Categoryitem data={item} key={index} />
      })}
    </div>
  );
}

export default App;
