import React from 'react'
import { Button, Header, Image, Modal, Icon, Placeholder } from 'semantic-ui-react'


function PassingStat() {
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
        <h1>Passing Stats</h1>
        </Button>}
    >
      <Modal.Content>
      <Placeholder>
    <Placeholder.Line />
    <Placeholder.Line />
    <Placeholder.Line />
    <Placeholder.Line />
    <Placeholder.Line />
  </Placeholder>
      </Modal.Content>
    </Modal>
  )
}

export default PassingStat