import React, {useState} from 'react'
import { Tab, Table, Icon, Segment } from 'semantic-ui-react'
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
   
    { render: () => <Tab.Pane as={Segment}>
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
  {Schedule.Games.map(game => {
        return(
          <>
  <Table.Row>   
      <Table.Cell>{game.Opponent}</Table.Cell>
      <Table.Cell>{game.Date}</Table.Cell>
      <Table.Cell>{game.Time}</Table.Cell>
      <Table.Cell>{game.Location}</Table.Cell>
      <Table.Cell>{game.Score}</Table.Cell>
      <Table.Cell><StatModal gameID={game.ID}/></Table.Cell>
      <Table.Cell><GameVideo/></Table.Cell> 
    </Table.Row>
    </>)})}
  </Table.Body>
    </Table>
    </Tab.Pane> },

   
  ]

  return(
    <div>
      <Tab panes={panes} />
      </div>
  )
}



