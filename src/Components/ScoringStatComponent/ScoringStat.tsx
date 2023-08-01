import React from 'react'
import { Button, Header, Image, Modal, Icon, Placeholder } from 'semantic-ui-react'
import { GPGGraph } from '../GPGComponent/GPGGraph'

function ScoringStat() {
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
        <h1>Goal/Assist Stats</h1>
        </Button>}
    >
      <Modal.Content>
       <GPGGraph/>
      </Modal.Content>
    </Modal>
  )
}

export default ScoringStat