import React from 'react'
import './LeftMenu.css';
import PlayerDrop from '../PlayerDropComponent/PlayerDrop';
import StatMenu from '../StatMenuComponent/StatMenu';
import TopLeftLogo from '../TopLeftLogoComponent/TopLeftLogo';



export const LeftMenu = () => {
    return(
        <div className='LeftMenu'>
           <TopLeftLogo/>
           <PlayerDrop/>
           <StatMenu/>
        </div>

    )
}

