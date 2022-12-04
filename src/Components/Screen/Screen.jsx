import React from 'react'
import './screen.css'
import Message from '../Message/Message'
import Form from 'react-bootstrap/Form'

function Screen() {
  return (
    <>
      <div id="screen">
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
      </div>
      <Form>
      <Form.Group className='d-flex align-items-center my-2'>
        <Form.Control size="md" type="text" />
      </Form.Group>
      </Form>
    </>

  )
}

export default Screen