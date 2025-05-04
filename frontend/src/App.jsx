import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
const [jokes ,setJokes] =useState([])

useEffect(()=>{
  axios.get('/api/jokes')
  .then((response) =>{
    // console.log(response); 
    
    setJokes(response.data)
  }).catch((error)=>{
    console.log(error);
    
  })
})

  return (
    <>
      <h1>Coffee with fullstack</h1>
      <p>Jokes :{jokes.length}</p>
      {
        jokes.map((joke, index)=>(
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </> // also learn CORS to add Proxy in vite.config.js directory. For vite and create react app proxy is different 
  )
}

export default App
