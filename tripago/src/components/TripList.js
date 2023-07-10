import { useState, useEffect } from 'react'
import './TripList.css'

export default function TripList() {
  const [trips, setTrips] = useState([])

  console.log(trips)

  useEffect(() => {
    console.log('First clg');
    fetch('http://localhost:3000/trips')
      .then(response => response.json())
      .then(json => setTrips(json))
    console.log('Second clg');
  // }, [!trips])
  }, []) // Ovako ce samo jednom da radi, tako da ne moramo da ubacujemo neki uslov

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}