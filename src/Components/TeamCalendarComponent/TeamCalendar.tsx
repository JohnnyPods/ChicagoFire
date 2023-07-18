import React from 'react'
import { Tab, Table, Icon } from 'semantic-ui-react'
import './TeamCalendar.css';

const panes = [
  { menuItem: 'September', render: () => <Tab.Pane>
      <Table Basic size='large' color='red'>
    <Table.Header >
      <Table.Row className='row'>
        <Table.HeaderCell>Opponent</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Time</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
        <Table.HeaderCell>Score</Table.HeaderCell>
        <Table.HeaderCell>Recap</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    <Table.Row>
        <Table.Cell>Test</Table.Cell>
        <Table.Cell>9/1/2023</Table.Cell>
        <Table.Cell>3:30 PM</Table.Cell>
        <Table.Cell>Test Rink</Table.Cell>
        <Table.Cell>(W) 5-2</Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>9/2/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Maryville University Hockey Center</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>9/3/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Maryville University Hockey Center</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>9/4/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Maryville University Hockey Center</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jr Storm</Table.Cell>
        <Table.Cell>9/30/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Canlan Sports</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </Tab.Pane> },
  { menuItem : 'October', render: () => <Tab.Pane >
    <Table Basic size='large' color='red'>
    <Table.Header >
      <Table.Row className='row'>
        <Table.HeaderCell>Opponent</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Time</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
        <Table.HeaderCell>Score</Table.HeaderCell>
        <Table.HeaderCell>Recap</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Jr Storm</Table.Cell>
        <Table.Cell>10/1/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Canlan Sports</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>HC of St Louis</Table.Cell>
        <Table.Cell>10/7/2023</Table.Cell>
        <Table.Cell>1:40 PM</Table.Cell>
        <Table.Cell>Mount Prospect Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>HC of St Louis</Table.Cell>
        <Table.Cell>10/8/2023</Table.Cell>
        <Table.Cell>9:10 AM</Table.Cell>
        <Table.Cell>Mount Prospect Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>10/20/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Notre Dame Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>10/21/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Notre Dame Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>10/22/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Notre Dame Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jr Mission</Table.Cell>
        <Table.Cell>10/28/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Fifth Third Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jr Mission</Table.Cell>
        <Table.Cell>10/29/2023</Table.Cell>
        <Table.Cell>9:20 AM</Table.Cell>
        <Table.Cell>Canlan Sports</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
    </Tab.Pane> },
  { menuItem: 'November', render: () => <Tab.Pane>
    <Table Basic size='large' color='red'>
    <Table.Header >
      <Table.Row className='row'>
        <Table.HeaderCell>Opponent</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Time</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
        <Table.HeaderCell>Score</Table.HeaderCell>
        <Table.HeaderCell>Recap</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Jr Storm</Table.Cell>
        <Table.Cell>11/18/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Orbit Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jr Storm</Table.Cell>
        <Table.Cell>11/19/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Orbit Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </Tab.Pane> },
  { menuItem: 'December', render: () => <Tab.Pane>
    <Table Basic size='large' color='red'>
    <Table.Header >
      <Table.Row className='row'>
        <Table.HeaderCell>Opponent</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Time</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
        <Table.HeaderCell>Score</Table.HeaderCell>
        <Table.HeaderCell>Recap</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Jr Team Illinois</Table.Cell>
        <Table.Cell>12/2/2023</Table.Cell>
        <Table.Cell>9:20 AM</Table.Cell>
        <Table.Cell>Arctic Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jr Team Illinois</Table.Cell>
        <Table.Cell>12/3/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Seven Bridges Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>Jr Team Illinois</Table.Cell>
        <Table.Cell>12/9/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Seven Bridges Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>Jr Team Illinois</Table.Cell>
        <Table.Cell>12/10/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Seven Bridges Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>International Stars</Table.Cell>
        <Table.Cell>12/15/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Little Ceasers Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>International Stars</Table.Cell>
        <Table.Cell>12/16/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Little Ceasers Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>International Stars</Table.Cell>
        <Table.Cell>12/17/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Little Ceasers Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jr Reapers</Table.Cell>
        <Table.Cell>12/21/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Mount Propsect Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jr Reapers</Table.Cell>
        <Table.Cell>12/22/2023</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Arctic Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </Tab.Pane> },
  { menuItem: 'Janurary', render: () => <Tab.Pane>
    <Table Basic size='large' color='red'>
    <Table.Header >
      <Table.Row className='row'>
        <Table.HeaderCell>Opponent</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Time</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
        <Table.HeaderCell>Score</Table.HeaderCell>
        <Table.HeaderCell>Recap</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Jr Team Illinois</Table.Cell>
        <Table.Cell>1/6/2024</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Arctic Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jr Team Illinois</Table.Cell>
        <Table.Cell>1/7/2024</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Seven Bridges Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Grinder: Winter Meltdown</Table.Cell>
        <Table.Cell>1/13/2024</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Fraser Hockeyland Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Grinder: Winter Meltdown</Table.Cell>
        <Table.Cell>1/14/2024</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Fraser Hockeyland Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Grinder: Winter Meltdown</Table.Cell>
        <Table.Cell>1/15/2024</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Fraser Hockeyland Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jr Mission</Table.Cell>
        <Table.Cell>1/20/2024</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Fifth Third Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jr Mission</Table.Cell>
        <Table.Cell>1/21/2024</Table.Cell>
        <Table.Cell>9:20 AM</Table.Cell>
        <Table.Cell>Arctic Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jr Reapers</Table.Cell>
        <Table.Cell>1/27/2024</Table.Cell>
        <Table.Cell>8:50 AM</Table.Cell>
        <Table.Cell>Mount Prospect Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jr Reapers</Table.Cell>
        <Table.Cell>1/28/2024</Table.Cell>
        <Table.Cell>9:20 AM</Table.Cell>
        <Table.Cell>Arctic Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </Tab.Pane> },
  { menuItem: 'February', render: () => <Tab.Pane>
    <Table Basic size='large' color='red'>
    <Table.Header >
      <Table.Row className='row'>
        <Table.HeaderCell>Opponent</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Time</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
        <Table.HeaderCell>Score</Table.HeaderCell>
        <Table.HeaderCell>Recap</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>State Playoffs</Table.Cell>
        <Table.Cell>2/23/2024</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Mount Prospect Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>State Playoffs</Table.Cell>
        <Table.Cell>2/24/2024</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Mount Prospect Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>State Playoffs</Table.Cell>
        <Table.Cell>2/25/2024</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Mount Prospect Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </Tab.Pane> },
  { menuItem: 'March', render: () => <Tab.Pane>
    <Table Basic size='large' color='red'>
    <Table.Header >
      <Table.Row className='row'>
        <Table.HeaderCell>Opponent</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Time</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
        <Table.HeaderCell>Score</Table.HeaderCell>
        <Table.HeaderCell>Recap</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>3/2/2024</Table.Cell>
        <Table.Cell>TBD</Table.Cell>
        <Table.Cell>Mount Prospect Ice Arena</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Icon className='icon' disabled name='newspaper' /> <Icon className='icon2' disabled name='video camera' /></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </Tab.Pane> },
]

export const TeamCalendar = () => <Tab panes={panes} />



