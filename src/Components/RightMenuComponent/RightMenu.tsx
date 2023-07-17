import React from 'react'
import './RightMenu.css';
import TeamInfo from '../TeamInfoComponent/TeamInfo';
import { TeamCalendar } from '../TeamCalendarComponent/TeamCalendar';
import { Routes, Route } from 'react-router-dom';
import StatDisplay from '../StatDisplayComponent/StatDisplay';
import GameVideo from '../GameVideoComponent/GameVideo';





export const RightMenu = () => {
    return(
        <div className='RightMenu'>
         <TeamInfo/>
         <Routes>
          <Route path="/Calendar" element={<TeamCalendar/>}/>
          <Route path="/Stats" element={<StatDisplay/>}/>
         </Routes>
        </div>

    )
}

