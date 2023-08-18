import React from 'react'
import { Button, Icon, Image, Item, Label, Grid, Segment, Divider, List } from 'semantic-ui-react'
import './Coaches.css';
import fire from '/Users/johnpod/FireSite/ChicagoFire/src/Components/Images/fire.jpeg'



const Coaches = () => (
  <Item.Group divided relaxed inverted>
    <Item>
      <Item.Image  size='medium' src={fire} />

      <Item.Content>
        <Item.Header><span className='Coach'>Brian Bicek</span></Item.Header>
        <Item.Meta>
          <span className='job'>Program Director</span>
        </Item.Meta>
        <br></br>
        <Item.Description>
      
    <Grid columns={2} relaxed='very' doubling>
      <Grid.Column>
        <Item.Header as='H1'>Playing Accomplishments</Item.Header>
      <List bulleted relaxed as='H3'>
        <List.Item>First overall pick of the 2002 NAHL Entry Draft to the Cleveland Barons</List.Item>
        <List.Item>NAHL leading scorer and NAHL Rookie of the Year (2003)</List.Item>
        <List.Item>Division 1 College Hockey at Western Michigan University (2004-2008) graduated with Bachelor of Finance with concentration 
          in Economics and Marketing

</List.Item>
    <List.Item>6-year Professional hockey player (PHPA) in the IHL, ECHL, and CHL playing in 304 pro games scoring 106 goals 
      and 240 points, IHL Turner Cup Champion Muskegon Lumberjacks (2009-2010)</List.Item>
    <List.Item>CHL All-Star Game and All-Star Game MVP Evansville Icemen (2010-2011)</List.Item>

  </List>
      </Grid.Column>
      <Grid.Column>
      <Item.Header as='H1'>Coaching Accomplishments</Item.Header>
      <List bulleted relaxed as='H3'>
      <List.Item>10-year Tier 1 AAA Head Coach previously with Chicago Mission 2001, 2004, and 2007 birth years.</List.Item>
      <List.Item>X6 Illinois Tier 1 AAA State Champion, Silver Stick Champion, USA Hockey Bantam National Championship invite</List.Item>
      <List.Item>Trained over 30 current Professional, Division 1 College, and USHL/NAHL Junior players</List.Item>
      <List.Item>USA Hockey Level 4 certified</List.Item>
      </List>
      </Grid.Column>
    </Grid>



        </Item.Description>
        <Item.Extra>
        
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image  size='medium' src={fire} />

      <Item.Content>
        <Item.Header><span className='Coach'>Doug Bosse</span></Item.Header>
        <Item.Meta>
          <span className='job'>Head Coach 8U</span>
        </Item.Meta>
        <br></br>
        <Item.Description as='H3'>
        <p className='CoachInfo'>Coach Doug Bosse played hockey throughout his youth, playing juniors in Seattle. 
        As a player, he was part of an HS State Championship team, a USA Hockey National Championship team, and was a two-time 
        All-Star playing Juniors for Seattle Americans in the PIJHL in British Columbia.</p>
        <br></br>
        <p className='CoachInfo'>Coach Bosse has been coaching hockey 15 years, helping players advance to AA, AAA, Junior, College Hockey, 
        and Pro Hockey. When Coaching High School Hockey he was voted one of the top four in the state as a coach that players wanted to play 
        for.</p>
        <br></br>
        <p className='CoachInfo'>Coach Bosse runs a variety of programs at Willowbrook as founder of DB Hockey Academy, 
        teaching at all age levels from Learn to skate, Novice to Adult Learn to Skate. </p>

        </Item.Description>
        <Item.Extra>
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image  size='medium' src={fire} />

      <Item.Content>
        <Item.Header><span className='Coach'>Jill Karsten</span></Item.Header>
        <Item.Meta>
          <span className='job'>Technical Skating Coach</span>
        </Item.Meta>
        <br></br>
        <Item.Description as='H3'>
        <p className='CoachInfo'>Coming in with 20 plus years of combined experience, education and exposure across a broad spectrum of hockey and figure skating, 
        Jill Karsten lands this season with the Chicago Fire as the technical skating coach.  Known for launching her students to success by 
        incorporating foundational posture, alignment and edging skills, the end results are a high standard of skating power, excellence, 
        and achievement whether in hockey or figure skating disciplines.  Quality over quantity is the core base of her instructional philosophy.</p>

        <p className='CoachInfo'>Jill began to acquire her acumen for detail while performing in the Ice Capades among several National, World and Olympic figure skating 
        champions (most notably Dorothy Hamill, Torvill & Dean).   Immersed among some of the best skaters in the world was profoundly influential 
        in offering a continuous exposure to elite level skating.   In 1996, Jill boldly opened, directed and implemented one of the first USFS-based 
        Learn-to-Skate programs in the Chicago area at Seven Bridges Ice Arena.  Its enrollment exceeded 1250 participants.  Recently, 
        Jill had another opportunity to observe high level of skating during her ten-year stint in sideline game operations with the NHL 
        Chicago Blackhawks.   Jill humbly appreciates the rare opportunity to have worked with and been exposed to such high-caliber, 
        accomplished athletes. </p>

        <p className='CoachInfo'>Analytical in nature, Jill uses a “best practices” approach for her skater using an arsenal of skating knowledge and expertise derived from 
        personal experience and industry-leading peers, coaches and influencers.   </p>

        </Item.Description>
        <Item.Extra>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default Coaches
