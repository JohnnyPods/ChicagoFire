import React from 'react';
import { Button, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import { Link, Route, Routes } from "react-router-dom"


const Seg = styled(Segment)`
display: flex;
flex-direction: column;
gap: 15px;
`;

const ButtonContainer = (text:string) => {

    return(
        <Button size = 'massive' inverted color='red'>
            {text}
        </Button>
    )
}

 const StatMenu = () => (
    <div>

<Seg size = "massive" inverted>
        <Button as={Link} to="/Calendar" size='large' inverted color='red' >
         Team Schedule
        </Button>
        <Button as  ={Link} to="/Stats" size='large' inverted color='red'>
          Team Statistics
        </Button>
        {/* <Button size='large' inverted color='red'>
          Shot Map
        </Button>
        <Button size='large' inverted color='red'>
          Goaltending
        </Button> */}
        <Button as={Link} to="/Face-off" size='large' inverted color='red'>
          Face-Offs
        </Button>
        <Button as={Link} to="/PlusMinus" size='large' inverted color='red'>
          Plus/Minus (+/-)
        </Button>
        <Button as={Link} to="Passing" size='large' inverted color='red'>
          Passing Efficiency
        </Button>
        <Button as={Link} to="Turnover" size='large' inverted color='red'>
          Turnover Ratio
        </Button>
</Seg>

    </div>
    
  )
  
  export default StatMenu