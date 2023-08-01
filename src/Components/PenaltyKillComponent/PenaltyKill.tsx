import React from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import { PKGraph } from '../PenaltyKillGraphCompnent/PKGraph'


function PenaltyKill() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size={'large'}
      trigger={
      <Button 
      fluid 
      color='red' 
      size='large' 
      inverted>
        <h1>Penalty Kill Stats</h1>
        </Button>}
    >
      <Modal.Content>
        <PKGraph/>
      </Modal.Content>
    </Modal>
  )
}

export default PenaltyKill