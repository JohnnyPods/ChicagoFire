import React from 'react';
import './App.css';
import { LeftMenu } from './Components/LeftComponent/LeftMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StatDisplay from './Components/StatDisplayComponent/StatDisplay';
import { TeamCalendar } from './Components/TeamCalendarComponent/TeamCalendar';
import TeamInfo from './Components/TeamInfoComponent/TeamInfo';
import '/Users/johnpod/ReactProject/my-app/src/Components/LeftComponent/LeftMenu.css';
import { RightMenu } from './Components/RightMenuComponent/RightMenu';






function App() {
  return ( 
    <div className='App'>
    <BrowserRouter>
    <LeftMenu/>
    <RightMenu/>
    </BrowserRouter>
    </div>
    
  );
}

export default App