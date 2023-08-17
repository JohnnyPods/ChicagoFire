import React from 'react';
import { useState } from 'react';
import { Button, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import './TeamInfo.css';

const Seg = styled(Segment)`
display: flex;
flex-direction: column;
gap: 20px;
`;

const TeamInfo = () => (
  <div className='TeamInfo'>
    <Seg size='small' inverted>
        <h1 className='Title'>2015 CHICAGO FIRE HOCKEY TEAM</h1>
    </Seg>
  </div>
  
  )
  
  export default TeamInfo

