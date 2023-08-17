import React from 'react'
import { Tab } from 'semantic-ui-react'
import GameStars from '../GameStars/GameStars';
import Summary from '../SummaryComponent/Summary';
import GameStats from '../GameStats/GameStats';
import Scoring from '../ScoringComponent/Scoring';


const panes = [
  { menuItem: 'Game Recap', render: () => <Tab.Pane className='Text'><Summary/></Tab.Pane> },
  //{ menuItem: 'Team Stats', render: () => <Tab.Pane className='Text'><GameStats/></Tab.Pane> },
  { menuItem: 'Scoring', render: () => <Tab.Pane className='Text'><Scoring/></Tab.Pane> },
  { menuItem: '3 Stars of the Game', render: () => <Tab.Pane className='Text'><GameStars/></Tab.Pane> },
  //{ menuItem: 'Play-by-Play', render: () => <Tab.Pane className='Text'></Tab.Pane> },
]

const Recap = () => <Tab 
menu={{ color: 'red', inverted: true, attached: true, tabular: false }}
panes={panes} />

export default Recap