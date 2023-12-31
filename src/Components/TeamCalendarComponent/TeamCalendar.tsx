import React, {useState} from 'react'
import {Table} from 'semantic-ui-react'
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

  return(
    <span>
       <Table size='large' color='black'>
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
      <Table.Cell>{game.ID !== "" && (<StatModal gameID={game.ID}/>)}</Table.Cell>
      <Table.Cell>{game.GameVideo !== "" && (<GameVideo gamevid={game.GameVideo}/>)}</Table.Cell> 
    </Table.Row>
    </>)})}
  </Table.Body>
    </Table>
    
    </span>
  )
}



