import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('mario')

  const handleClick = () => {
    console.log('---1---');
    console.log(name)
    console.log('---2---');
    setName('luigi')
    console.log(setName('luigi'));
    console.log('---3---');
    console.log(name)
    console.log('---4---');
  }
  
  const handleClickTwo = () => {
    console.log('---1---');
    console.log(name)
    console.log('---2---');
    setName('luigi')
    console.log(setName('luigi'));
    console.log('---3---');
    console.log(name)
    console.log('---4---');
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <h1>Postoji razlika u okidanju kada se stavi 'onClick= handleClick' u odnosu na ' onClick=(e) = handleClickTwo()'</h1>
      <button onClick={handleClick}>Change name</button> 
      <br />
      <button onClick={(e) => handleClickTwo()}>Change name Two</button>
    </div>
  );
}

export default App;
