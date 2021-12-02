// ./src/components/TimerFour.js
import React, { useState, useEffect } from "react";

function TimerFour() {

  const [count, setCount] = useState(0)

  // const { id } = useParams()

  useEffect(()=>{
    console.log("I am inside useEffect")
    const id = setInterval(()=>{
      console.log("The set intervale clicked!")
      setCount((count)=> count + 1)
    }, Math.random()*1000)
  },
  [ ] // put params.id here as a condition
  )

  return(<p> Tiemr Fourn {count} </p>)
}

export default TimerFour;