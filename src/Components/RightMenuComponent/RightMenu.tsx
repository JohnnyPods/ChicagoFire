import React from 'react'
import './RightMenu.css';
import TeamInfo from '../TeamInfoComponent/TeamInfo';
import { TeamCalendar } from '../TeamCalendarComponent/TeamCalendar';
import { Routes, Route } from 'react-router-dom';
import StatDisplay from '../StatDisplayComponent/StatDisplay';
import { Faceoff } from '../FaceoffComponent/Faceoff';
import { PlusMinus } from '../PlusMinusComponent/PlusMinus';
import { Passing } from '../PassingComponent/Passing';
import { Turnover } from '../TurnoverComponent/Turnover';
import TeamStats from '../TeamStatsComponent/TeamStats';
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
          <Route path="/Stats" element={<StatDisplay/>}/>
          <Route path="/Face-off" element={<Faceoff/>}/>
          <Route path="/PlusMinus" element={<PlusMinus/>}/>
          <Route path="/Passing" element={<Passing/>}/>
          <Route path="/Turnover" element={<Turnover/>}/>
          <Route path="/TeamRoster" element={<TeamRoster/>}/>
          <Route path="/Coaches" element={<Coaches/>}/>
          <Route path="/ChicagoFire" element={<Home/>}/>
         </Routes>
        </div>

    )
}

