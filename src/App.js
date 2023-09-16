import React, {useState} from 'react';

function App() {
  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('INPUT:')

  function increase(){
    setLikes(likes + 1)
  } 
  function decrease(){
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input
        type="text"
        value={value} 
        onChange={event => setValue(event.target.value)}
        />
      <button onClick={increase} >increase</button>
      <button onClick={decrease} >decrease</button>
    </div>
  );
}

export default App;

// https://youtu.be/GNrdg3PzpJQ?si=e9J2WCS2rl3rDC9s  24:07