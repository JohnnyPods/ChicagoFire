import React from 'react';
import logo from './logo.svg';
import './App.css';

//components
import  {DashboardTest}  from './Components/DashboartTest';
import { PlayerList } from './Components/PlayerList';

function App() {
  return (
    <div className="App">
      <p></p>
      2015 Chicago Fire Hockey Team
      <p></p>
      <PlayerList/>
    </div>
   
  );
}

export default App;
