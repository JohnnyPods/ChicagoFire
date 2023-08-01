import React from 'react';
import { useState } from 'react';
import { Button, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import '../TeamInfoComponent/TeamInfo.css'

const Seg = styled(Segment)`
display: flex;
flex-direction: column;
`;


const TeamRecord = () => (
  <div className='TeamRecord'>

    <Seg size='medium' inverted>
        <h1 className='Title'>TEAM RECORD 0-0-0</h1>
    </Seg>
  </div>
  )
  
  export default TeamRecord