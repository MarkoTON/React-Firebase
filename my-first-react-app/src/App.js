import './App.css'
import { useState } from 'react'

function App() {
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  const handleClick = (e,id) => {
    console.log(e)
    console.log(id)
    setEvents((prevEvents, next) => {
      console.log(prevEvents)
      console.log(next)
      return prevEvents.filter(event => id !== event.id)
    })
  }

  return (
    <div className="App">
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={(e) => handleClick(e.target,event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
