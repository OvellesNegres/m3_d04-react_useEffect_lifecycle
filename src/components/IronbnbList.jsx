import axios from "axios"
import { useState, useEffect } from "react";


const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";

export default function IronbnbList(){
    const [apartments, setApartments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        axios.get(apiURL).then((response)=>{
            setApartments(response.data)
            setIsLoading(false)
        }
        ).catch(console.log)
    } ,[])


    return(<div>
        <h1>List of IronApartments</h1>
        {isLoading && <h3>Loading apartments</h3>}

        {isLoading && apartments.length === 0 ? <h3>No apartments found on the database</h3>: null }

        {apartments.map((apt)=>(
        <div key={apt._id} className="card">
          <img src={apt.img} alt="apartment" />
          <h3>{apt.title}</h3>
          <p>Price: {apt.pricePerDay}</p>
        </div>
      ))}


    </div>)
}