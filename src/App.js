import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MyComponentProfile} from './mycomponentprofile';
import {MyComponentTitle} from './mycomponenttitle';
import { MyComponentEducation } from './mycomponentEducation';
import { MyComponentPersonal } from './mycomponentpersonal';
import { MyComponentJobOne } from './mycomponentjobone';
import { MyComponentJobTwo } from './mycomponentjobtwo';
import { MyComponentObjective } from './mycomponentobjective';


function App() {
  return (
    <div className="App">
      <header className="App-header"><link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MyComponentTitle/>
        <br />
        <MyComponentProfile/>
        <br />
        <MyComponentObjective/>
        <br />
        <MyComponentPersonal/>
        <br />
        <MyComponentEducation/>
        <br />
        <MyComponentJobOne/>
        <br />
        <MyComponentJobTwo/>
    </div>
  );
}

export default App;
