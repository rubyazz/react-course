import React, {useState} from 'react';
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState('INPUT:')

  
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;

// https://youtu.be/GNrdg3PzpJQ?si=e9J2WCS2rl3rDC9s  26:37