import React from 'react'
import { Grid, Segment, Placeholder, Header, Image, Divider } from 'semantic-ui-react'
import PowerPlay from '../PowerPlayComponent/PowerPlay'
import TeamRecord from '../TeamRecordComponent/TeamRecord'
import PenaltyKill from '../PenaltyKillComponent/PenaltyKill'
import Shooting from '../ShootingComponent/Shooting'
import PassingStat from '../PassingStatComponent/PassingStat'
import TurnoverStat from '../TurnoverStatComponent/TurnoverStat'
import ScoringStat from '../ScoringStatComponent/ScoringStat'

const TeamStats = () => (
  <><><TeamRecord/></>
  <><Grid>

  <Grid.Row centered columns={3}>
    <Grid.Column>
    <Segment  color='black' inverted>
    <Header as='h1' floated='left'>Power Play %:</Header>
    <Header as='h1' floated='right'>23.25%</Header>
    <Divider  section clearing />
    
    <PowerPlay/>
  </Segment>
    </Grid.Column>

    <Grid.Column>
    <Segment  color='black' inverted>
    <Header as='h1' floated='left'>Penalty Kill %:</Header>
    <Header as='h1' floated='right'>88.67%</Header>
    <Divider  section clearing />
    <PenaltyKill/>
    </Segment>
    </Grid.Column>

    <Grid.Column>
    <Segment color='black' inverted>
    <Header as='h1' floated='left'>Goals Per Game:</Header>
    <Header as='h1' floated='right'>3.6</Header>
    <Divider  section clearing />
    <ScoringStat/>
    </Segment>
    </Grid.Column>


  </Grid.Row>

  <Grid.Row centered columns={3}>
  <Grid.Column>
    <Segment color='black' inverted>
    <Header as='h1' floated='left'>Passing %:</Header>
    <Header as='h1' floated='right'>65.66%</Header>
    <Divider  section clearing />
    <PassingStat/>
    </Segment>
    </Grid.Column>

    <Grid.Column>
    <Segment color='black' inverted>
    <Header as='h1' floated='left'>T/O Ratio:</Header>
    <Header as='h1' floated='right'>1.05</Header>
    <Divider  section clearing />
    <TurnoverStat/>
    </Segment>
    </Grid.Column>

    <Grid.Column>
    <Segment color='black' inverted>
    <Header as='h1' floated='left'>Shooting %:</Header>
    <Header as='h1' floated='right'>12.60%</Header>
    <Divider  section clearing />
    <Shooting/>
    </Segment>
    </Grid.Column>


  </Grid.Row>
  
  
</Grid>
</>
</> 
)

export default TeamStats