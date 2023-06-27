import React from 'react';
import logo from './logo.svg';
import './Main.css';

//components
import { Loginpage } from './Components/LoginComponent/Loginpage';
import { PlayerList } from './Components/PlayerList';


function Main() {
  return (
    <div className="Main">
      <Loginpage />
    </div>
   
  );
}

export default Main;

