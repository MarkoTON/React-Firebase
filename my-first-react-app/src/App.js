import './App.css'
import { useState } from 'react'

function App() {
  // const [name, setName] = useState('')
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  // const id = 5;

  console.log(showEvents)

  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
    })
  }

  const handleAdd = () => {
    setEvents((prevEvents, newEvents)=> {
      console.log(prevEvents)
      console.log(newEvents)
      return [...prevEvents, {title:'Some random added title', id: 5}]
    })
  }

  return (
    <div className="App">
      {/* <input type="text" value={name} /> */}
      <button onClick={(e)=> handleAdd()} >Add</button>
      
      <hr />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}

      <hr />

      {!showEvents ? (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      ): (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
