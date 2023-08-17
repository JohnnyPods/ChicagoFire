import React from 'react'
import { Divider, Image, Segment, List } from 'semantic-ui-react'
import './Home.css'
import team from 'my-app/src/Components/Images/TeamPhoto.jpg'
import Footer from '../FooterComponent/Footer'



const Home = () => (
    <div className='Home'>
    <Segment inverted>
      <br></br>
    <span className='Welcome'>WELCOME TO THE CHICAGO FIRE</span>
    <Divider horizontal inverted/>
    <Image src={team} />
    <Divider inverted section/>

    <span className='description'>
    The Chicago Fire Hockey Club was formed in the spring of 2022 with a 9U (2013) and 8U (2014) AAU independent pre tier 1 teams. 
    The goal and focus of this program is to provide advanced training sessions centered around individual and team 
    player development through proper instruction and correction, and progressive problem solving concepts, while competing 
    against some of the top competition in the country. 

    </span>

    <Divider inverted section/>
      <span className='description'>
      The Mite 8U 2015 team is led by Program Director Brian Bicek and Coach Doug Bosse along with additional dedicated coaches 
      and driven by a proven developmental model and training methods.
      </span>
      
    <Divider inverted section/>
    <span className='description'>
    Our belief and core principals are centered on being a well-rounded athlete, strong skater, and team first player to 
    enhance the quality of team play and the love and passion for the game of hockey. 
    </span>

    <List bulleted relaxed>
      <List.Item>A minimum of (3) 1 hr. 20 min ice touches per week</List.Item>
      <List.Item>Off ice and personal training sessions with Jeff Blindauer</List.Item>
      <List.Item>3+ High Level coaches at every practice </List.Item>
      <List.Item>Skating evaluations and instruction by Jill Karsten</List.Item>
      <List.Item>Weekly Goalie instruction and training with Zack Drane </List.Item>
      <List.Item>Off ice shooting sessions on synthetic ice</List.Item>
      </List>


  </Segment>
  <Footer/>
  </div>
)

export default Home