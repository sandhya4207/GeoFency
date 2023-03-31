import React from 'react'
import { useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [city1,setCity1]=useState("");
  const [city2,setCity2]=useState("");
  const [distance,setDistance]=useState()

 const getDistance=(e)=>{
 e.preventDefault()
  console.log(city1,city2)
  let url=`http://localhost:8625/map/travelDistance?city1=${city1}&city2=${city2}`
  axios.get(url).then((data)=>{
    setDistance(data.data.Distance)
  }).catch((err)=>{
    console.log(err)
  })
 }
  return (
    <div className="container">
      <div>
      <form className='demoForm'>
       <h2>Find Distance Between Two Cities</h2>
       <div className='form-group'>
         <label htmlFor='City1'>City1</label>
         <input type='text' className='form-control'
           name='city1' onChange={(e)=>setCity1(e.target.value)}/>
       </div>
       <div className='form-group'>
         <label htmlFor='city2'>City2</label>
         <input type='city2' className='form-control'
           name='city2' onChange={(e)=>setCity2(e.target.value)} />
       </div>
       <button type='submit' className='btn btn-primary' onClick={getDistance}>
          Find Distance
       </button>
     </form>
    <div className='card'> 
      Distance: {distance} Km
    </div>  
     </div>
    </div>
  );
}
export default App;