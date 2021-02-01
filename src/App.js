import React from 'react';
import {CoursesForm} from "./features/coursesForm/CoursesForm";
import './App.css';
import {promises} from "./features/promises";

function App() {
  console.log(promises())
  return (
    <div className="App">
      <header className="App-header">
          <CoursesForm />
      </header>
    </div>
  );
}

export default App;
