import React, {useState} from 'react'
import { Tab, Table, Icon } from 'semantic-ui-react'
import Schedule from "./Schedule.json";
import StatModal from '../ModalComponent/Modal';
import GameVideo from '../GameVideoComponent/GameVideo';

const months=[
 "September" 
]

export const TeamCalendar = () => {

  const [ openModal , setOpenModal  ] = useState(false)

  const handleClick = () =>{
    setOpenModal(!openModal)
  }

  const panes = [
    { menuItem: "August", render: () => <Tab.Pane>
    <Table size='small' color='red' compact='very'>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Opponent</Table.HeaderCell>
      <Table.HeaderCell>Date</Table.HeaderCell>
      <Table.HeaderCell>Time</Table.HeaderCell>
      <Table.HeaderCell>Location</Table.HeaderCell>
      <Table.HeaderCell>Score</Table.HeaderCell>
      <Table.HeaderCell>Recap</Table.HeaderCell>
      <Table.HeaderCell>Video</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
  {Schedule.August.map(game => {
        return(
          <>
  <Table.Row>   
      <Table.Cell>{game.Opponent}</Table.Cell>
      <Table.Cell>{game.Date}</Table.Cell>
      <Table.Cell>{game.Time}</Table.Cell>
      <Table.Cell>{game.Location}</Table.Cell>
      <Table.Cell>{game.Score}</Table.Cell>
      <Table.Cell><StatModal/></Table.Cell>
      <Table.Cell><GameVideo/></Table.Cell> 
    </Table.Row>
    </>)})}
  </Table.Body>

 
</Table>
</Tab.Pane> },
    { menuItem: "September", render: () => <Tab.Pane>
        <Table  size='small' color='red' compact='very'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Opponent</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Time</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
          <Table.HeaderCell>Score</Table.HeaderCell>
          <Table.HeaderCell>Recap</Table.HeaderCell>
          <Table.HeaderCell>Video</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {Schedule.September.map(game => {
            return(
              <>
      <Table.Row>   
          <Table.Cell>{game.Opponent}</Table.Cell>
          <Table.Cell>{game.Date}</Table.Cell>
          <Table.Cell>{game.Time}</Table.Cell>
          <Table.Cell>{game.Location}</Table.Cell>
          <Table.Cell>{game.Score}</Table.Cell>
          <Table.Cell><StatModal/></Table.Cell>
          <Table.Cell><GameVideo/></Table.Cell> 
        </Table.Row>
        </>)})}
      </Table.Body>

     
    </Table>
    </Tab.Pane> },
    { menuItem: "October", render: () => <Tab.Pane>
    <Table  size='small' color='red' compact='very'>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Opponent</Table.HeaderCell>
      <Table.HeaderCell>Date</Table.HeaderCell>
      <Table.HeaderCell>Time</Table.HeaderCell>
      <Table.HeaderCell>Location</Table.HeaderCell>
      <Table.HeaderCell>Score</Table.HeaderCell>
      <Table.HeaderCell>Recap</Table.HeaderCell>
      <Table.HeaderCell>Video</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
  {Schedule.October.map(game => {
        return(
          <>
  <Table.Row>   
      <Table.Cell>{game.Opponent}</Table.Cell>
      <Table.Cell>{game.Date}</Table.Cell>
      <Table.Cell>{game.Time}</Table.Cell>
      <Table.Cell>{game.Location}</Table.Cell>
      <Table.Cell>{game.Score}</Table.Cell>
      <Table.Cell><StatModal/></Table.Cell>
      <Table.Cell><GameVideo/></Table.Cell> 
    </Table.Row>
    </>)})}
  </Table.Body>

 
</Table>
    </Tab.Pane> },
    { menuItem: "November", render: () => <Tab.Pane>
<Table  size='small' color='red' compact='very'>
<Table.Header>
<Table.Row>
  <Table.HeaderCell>Opponent</Table.HeaderCell>
  <Table.HeaderCell>Date</Table.HeaderCell>
  <Table.HeaderCell>Time</Table.HeaderCell>
  <Table.HeaderCell>Location</Table.HeaderCell>
  <Table.HeaderCell>Score</Table.HeaderCell>
  <Table.HeaderCell>Recap</Table.HeaderCell>
  <Table.HeaderCell>Video</Table.HeaderCell>
</Table.Row>
</Table.Header>
<Table.Body>
{Schedule.November.map(game => {
    return(
      <>
<Table.Row>   
  <Table.Cell>{game.Opponent}</Table.Cell>
  <Table.Cell>{game.Date}</Table.Cell>
  <Table.Cell>{game.Time}</Table.Cell>
  <Table.Cell>{game.Location}</Table.Cell>
  <Table.Cell>{game.Score}</Table.Cell>
  <Table.Cell><StatModal/></Table.Cell>
  <Table.Cell><GameVideo/></Table.Cell> 
</Table.Row>
</>)})}
</Table.Body>


</Table>
    </Tab.Pane> },
    { menuItem: "December", render: () => <Tab.Pane>
    <Table  size='small' color='red' compact='very'>
    <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Opponent</Table.HeaderCell>
      <Table.HeaderCell>Date</Table.HeaderCell>
      <Table.HeaderCell>Time</Table.HeaderCell>
      <Table.HeaderCell>Location</Table.HeaderCell>
      <Table.HeaderCell>Score</Table.HeaderCell>
      <Table.HeaderCell>Recap</Table.HeaderCell>
      <Table.HeaderCell>Video</Table.HeaderCell>
    </Table.Row>
    </Table.Header>
    <Table.Body>
    {Schedule.December.map(game => {
        return(
          <>
    <Table.Row>   
      <Table.Cell>{game.Opponent}</Table.Cell>
      <Table.Cell>{game.Date}</Table.Cell>
      <Table.Cell>{game.Time}</Table.Cell>
      <Table.Cell>{game.Location}</Table.Cell>
      <Table.Cell>{game.Score}</Table.Cell>
      <Table.Cell><StatModal/></Table.Cell>
      <Table.Cell><GameVideo/></Table.Cell> 
    </Table.Row>
    </>)})}
    </Table.Body>


    </Table>
    </Tab.Pane> },
    { menuItem: "January", render: () => <Tab.Pane>
    <Table  size='small' color='red' compact='very'>
    <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Opponent</Table.HeaderCell>
      <Table.HeaderCell>Date</Table.HeaderCell>
      <Table.HeaderCell>Time</Table.HeaderCell>
      <Table.HeaderCell>Location</Table.HeaderCell>
      <Table.HeaderCell>Score</Table.HeaderCell>
      <Table.HeaderCell>Recap</Table.HeaderCell>
      <Table.HeaderCell>Video</Table.HeaderCell>
    </Table.Row>
    </Table.Header>
    <Table.Body>
    {Schedule.January.map(game => {
        return(
          <>
    <Table.Row>   
      <Table.Cell>{game.Opponent}</Table.Cell>
      <Table.Cell>{game.Date}</Table.Cell>
      <Table.Cell>{game.Time}</Table.Cell>
      <Table.Cell>{game.Location}</Table.Cell>
      <Table.Cell>{game.Score}</Table.Cell>
      <Table.Cell><StatModal/></Table.Cell>
      <Table.Cell><GameVideo/></Table.Cell> 
    </Table.Row>
    </>)})}
    </Table.Body>


    </Table>
    </Tab.Pane> },
    { menuItem: "February", render: () => <Tab.Pane>
    <Table  size='small' color='red' compact='very'>
    <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Opponent</Table.HeaderCell>
      <Table.HeaderCell>Date</Table.HeaderCell>
      <Table.HeaderCell>Time</Table.HeaderCell>
      <Table.HeaderCell>Location</Table.HeaderCell>
      <Table.HeaderCell>Score</Table.HeaderCell>
      <Table.HeaderCell>Recap</Table.HeaderCell>
      <Table.HeaderCell>Video</Table.HeaderCell>
    </Table.Row>
    </Table.Header>
    <Table.Body>
    {Schedule.February.map(game => {
        return(
          <>
    <Table.Row>   
      <Table.Cell>{game.Opponent}</Table.Cell>
      <Table.Cell>{game.Date}</Table.Cell>
      <Table.Cell>{game.Time}</Table.Cell>
      <Table.Cell>{game.Location}</Table.Cell>
      <Table.Cell>{game.Score}</Table.Cell>
      <Table.Cell><StatModal/></Table.Cell>
      <Table.Cell><GameVideo/></Table.Cell> 
    </Table.Row>
    </>)})}
    </Table.Body>


    </Table>
    </Tab.Pane> },
    { menuItem: "March", render: () => <Tab.Pane>
    <Table  size='small' color='red' compact='very'>
    <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Opponent</Table.HeaderCell>
      <Table.HeaderCell>Date</Table.HeaderCell>
      <Table.HeaderCell>Time</Table.HeaderCell>
      <Table.HeaderCell>Location</Table.HeaderCell>
      <Table.HeaderCell>Score</Table.HeaderCell>
      <Table.HeaderCell>Recap</Table.HeaderCell>
      <Table.HeaderCell>Video</Table.HeaderCell>
    </Table.Row>
    </Table.Header>
    <Table.Body>
    {Schedule.March.map(game => {
        return(
          <>
    <Table.Row>   
      <Table.Cell>{game.Opponent}</Table.Cell>
      <Table.Cell>{game.Date}</Table.Cell>
      <Table.Cell>{game.Time}</Table.Cell>
      <Table.Cell>{game.Location}</Table.Cell>
      <Table.Cell>{game.Score}</Table.Cell>
      <Table.Cell><StatModal/></Table.Cell>
      <Table.Cell><GameVideo/></Table.Cell> 
    </Table.Row>
    </>)})}
    </Table.Body>


    </Table>
    </Tab.Pane> },

   
  ]

  return(
      <Tab panes={panes} />
  )
}



