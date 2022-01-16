import logo from './logo.svg';
import './App.css';
import Weathercard from './components/Weathercard0';
import Temp from "./components/temp"
import React, { useState, useEffect } from 'react';

function App() {
  const [dark, setMode] = useState(false)
  return (
    <>
      <div className={dark ? 'App dark-mode' : 'App'}>
        <center>

          <header className="App-header">
            <h1>5-Day Forecast</h1>
          </header>
          <Temp  {...dark}/>
          <br />
          <br />
          <br />
          <br />

          <div className='switch'>
            <input type="checkbox" onChange={() => setMode(!dark)} />
            Dark Mode
          </div>
          <h4 className='by'>By Parth Vadher</h4>
        </center>
      </div>
    </>
  );
}

export default App;