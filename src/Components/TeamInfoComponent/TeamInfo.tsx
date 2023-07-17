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

const ButtonContainer = (text:string) => {

    return(
        <Button size = 'massive' inverted color='red'>
            {text}
        </Button>
    )
}



const TeamInfo = () => (
  <div className='TeamInfo'>

    <Seg size='massive' inverted>
        2015 CHICAGO FIRE HOCKEY TEAM
    </Seg>
    <Seg size='massive' inverted>
        RECORD 0-0-0
    </Seg>
  </div>
  )
  
  export default TeamInfo

