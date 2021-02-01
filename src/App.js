import React from 'react';
import {CoursesForm} from "./features/coursesForm/CoursesForm";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h2>Redux-Form task:</h2>
          <CoursesForm />
      </header>
    </div>
  );
}

export default App;
