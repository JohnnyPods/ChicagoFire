import React from 'react'
import { Table } from 'semantic-ui-react'
import Stats from "./GameStats.json";

const GameStats = () => (
  <div>
  
      <Table 
      celled 
      color='red' 
      inverted 
      textAlign='center' 
      size='small' 
      compact='very'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Skater</Table.HeaderCell>
            <Table.HeaderCell>G</Table.HeaderCell>
            <Table.HeaderCell>A</Table.HeaderCell>
            <Table.HeaderCell>P</Table.HeaderCell>
            <Table.HeaderCell>+/-</Table.HeaderCell>
            <Table.HeaderCell>SOG</Table.HeaderCell>
            <Table.HeaderCell>PIM</Table.HeaderCell>
            <Table.HeaderCell>BLKS</Table.HeaderCell>
            <Table.HeaderCell>TKA</Table.HeaderCell>
            <Table.HeaderCell>GVA</Table.HeaderCell>
            <Table.HeaderCell>FW</Table.HeaderCell>
            <Table.HeaderCell>FL</Table.HeaderCell>
            <Table.HeaderCell>FO%</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Stats.Player.map(Stat =>{
            return(
          <Table.Row>
            <Table.Cell>{Stat.Number}</Table.Cell>
            <Table.Cell>{Stat.Name}</Table.Cell>
            <Table.Cell>{Stat.Goals}</Table.Cell>
            <Table.Cell>{Stat.Assists}</Table.Cell>
            <Table.Cell>{Stat.Points}</Table.Cell>
            <Table.Cell>{Stat.PlusMinus}</Table.Cell>
            <Table.Cell>{Stat.SOG}</Table.Cell>
            <Table.Cell>{Stat.PIM}</Table.Cell>
            <Table.Cell>{Stat.Blocks}</Table.Cell>
            <Table.Cell>{Stat.Takeaways}</Table.Cell>
            <Table.Cell>{Stat.Giveaways}</Table.Cell>
            <Table.Cell>{Stat.FaceoffWins}</Table.Cell>
            <Table.Cell>{Stat.FaceoffLoss}</Table.Cell>
            <Table.Cell>{Stat.FaceoffPercentage}</Table.Cell>
          </Table.Row>
           )})}
        </Table.Body>
        </Table>
        <Table color='red' inverted textAlign='center' compact='very' >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Goalie</Table.HeaderCell>
            <Table.HeaderCell>SA</Table.HeaderCell>
            <Table.HeaderCell>GA</Table.HeaderCell>
            <Table.HeaderCell>SV</Table.HeaderCell>
            <Table.HeaderCell>EV</Table.HeaderCell>
            <Table.HeaderCell>PP</Table.HeaderCell>
            <Table.HeaderCell>SH</Table.HeaderCell>
            <Table.HeaderCell>SV%</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {Stats.Goalie.map(Stat =>{
            return(
          <Table.Row >
            <Table.Cell>{Stat.Number}</Table.Cell>
            <Table.Cell>{Stat.Name}</Table.Cell>
            <Table.Cell>{Stat.ShotsAgainst}</Table.Cell>
            <Table.Cell>{Stat.GoalsAgainst}</Table.Cell>
            <Table.Cell>{Stat.Saves}</Table.Cell>
            <Table.Cell>{Stat.EvenStrength}</Table.Cell>
            <Table.Cell>{Stat.PowerPlay}</Table.Cell>
            <Table.Cell>{Stat.Shorthanded}</Table.Cell>
            <Table.Cell>{Stat.SavePercentage}</Table.Cell>
          </Table.Row>
             )})}
          </Table.Body>
      </Table>
    
  </div>
)

export default GameStats