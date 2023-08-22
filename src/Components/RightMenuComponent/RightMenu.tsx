import React from 'react'
import './RightMenu.css';
import { TeamCalendar } from '../TeamCalendarComponent/TeamCalendar';
import { Routes, Route } from 'react-router-dom';
import TeamRoster from '../TeamRosterComponent/TeamRoster';
import StatMenu from '../StatMenuComponent/StatMenu';
import Coaches from '../CoachesComponent/Coaches';
import Home from '../HomeComponent/Home';

export const RightMenu = () => {
    return(
        <div className='RightMenu'>
            
         <StatMenu/>
         
         <Routes>
          <Route path="/Calendar" element={<TeamCalendar/>}/>
          <Route path="/TeamRoster" element={<TeamRoster/>}/>
          <Route path="/Coaches" element={<Coaches/>}/>
          <Route path="/ChicagoFire" element={<Home/>}/>
         </Routes>
        </div>

    )
}

