import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function App() {

  const [name, setName] = useState('')
  const [rollNumber, setRollNumber] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setRollNumber('');
    console.log(name, rollNumber)
    localStorage.setItem(`${rollNumber}`, `${name}` );
    navigate('/home');
  }

  return (
    <div className="">
      <form 
      >
        <input
          type='text'
          placeholder="Name"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        >
        
        </input>
        <input
          type='number'
          placeholder="Roll Number"
          value={rollNumber}
          onChange={(e) => {setRollNumber(e.target.value)}}
        >
        
        </input>
        <input type='submit'value='CHECK IN' onClick={handleSubmit} >
          
        </input>
      </form>
      
    </div>
  );
}

export default App;
