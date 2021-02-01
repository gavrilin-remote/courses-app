import React, {useEffect, useState} from 'react';
import './App.css';
import {promises} from "./features/promises";

function App() {

    const [result, setResult] = useState(undefined)

    useEffect(()=>{
        setResult(promises())
    }, [])


  return (
    <div className="App">
      <header className="App-header">
          <div><h2>Result:</h2>
              {result && result.map(a => `[${ Object.values(a).join(", ") }]`).join(", ")}
          </div>
      </header>
    </div>
  );
}

export default App;
