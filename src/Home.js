import React from 'react'
import { useState, useEffect } from "react";



const Home = () => {

    const [length, setLength] = useState(0)

    // for (var i = 0; i < localStorage.length; i++){
    //     console.log(localStorage.getItem(i))
    // }

    useEffect(() => {
      setLength(localStorage.length)
    }, [])
    
    const d = new Date();
    console.log( d.toLocaleString() )

  return (
    <div>
      {/* Home */}
      <h2>
        There are { length-1 } students in school.
      </h2>
      <h2>
        CheckIn Time :  
        {
            d.toLocaleString()
        }
      </h2>
      <h2>
      CheckOut Time:
      </h2>

    </div>
  )
}

export default Home
