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

export const RightMenu = () => {
    return(
        <div className='RightMenu'>
         <TeamInfo/>
         
         <Routes>
          <Route path="/" element={<TeamStats/>}/>
          <Route path="/Calendar" element={<TeamCalendar/>}/>
          <Route path="/Stats" element={<StatDisplay/>}/>
          <Route path="/Face-off" element={<Faceoff/>}/>
          <Route path="/PlusMinus" element={<PlusMinus/>}/>
          <Route path="/Passing" element={<Passing/>}/>
          <Route path="/Turnover" element={<Turnover/>}/>
         </Routes>
        </div>

    )
}

