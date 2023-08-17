import React from 'react';
import { Button, ButtonGroup, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import { Link, Route, Routes } from "react-router-dom"
import './StatMenu.css'


const Seg = styled(Segment)`
display: center;
flex-direction: row;
`;

const ButtonContainer = (text:string) => {

    return(
        <Button size = 'massive' inverted color='red'>
            {text}
        </Button>
    )
}

 const StatMenu = () => (
    <div className='options'>

<Seg size = "small" inverted>
      <ButtonGroup widths={4} >
      <Button  as={Link} to="/Home" size='massive' inverted color='red'>
          Home
        </Button>
        <Button as={Link} to="/TeamRoster" size='massive' inverted color='red'>
         Team Roster
        </Button>
        <Button as={Link} to="/Coaches" size='massive' inverted color='red'>
          Coaches
        </Button>
        <Button as={Link} to="/Calendar" size='massive' inverted color='red' >
         Team Schedule
        </Button>


        </ButtonGroup>
        {/* <Button size='large' inverted color='red'>
          Shot Map
        </Button>
                <Button as={Link} to="/Stats" size='massive' inverted color='red'>
          Team Statistics
        </Button>
        <Button size='large' inverted color='red'>
          Goaltending
        </Button> 
        <Button as={Link} to="/Face-off" size='massive' inverted color='red'>
          Face-Offs
        </Button>
        <Button as={Link} to="/PlusMinus" size='massive' inverted color='red'>
          Plus/Minus (+/-)
        </Button>
        <Button as={Link} to="Passing" size='massive' inverted color='red'>
          Passing Efficiency
        </Button>
        <Button as={Link} to="Turnover" size='massive' inverted color='red'>
          Turnover Ratio
        </Button>*/}
</Seg>

    </div>
    
  )
  
  export default StatMenu