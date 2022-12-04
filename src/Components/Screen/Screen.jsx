import React from 'react'
import './screen.css'
import Message from '../Message/Message'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

import { ACTIONS } from '../../App'

function Screen({dispatch, messageHistory}) {

  function handleSend(e){
    if(e.target[0].value.length > 0){
      const msgObject = {sender:'Leon', messageContent:e.target[0].value}
      dispatch( { type:ACTIONS.ADDMSG, payload:msgObject});
      e.target[0].value = '';
    
    }else{
      alert('please do not send empty strings');
    }
  }

  function renderMessages(){
    return messageHistory.map((msg)=>{
      return <Message sender={msg.sender} content={msg.messageContent}/>
    })
  }

  return (
    <>
      <div id="screen">
        {renderMessages()}
        
      </div>
      <Form onSubmit={(e)=> {e.preventDefault(); handleSend(e);}}>
      <Form.Group className='d-flex align-items-center my-2'>
        <Form.Control size="md" type="text"/>
        <Button type="submit">Submit</Button>
      </Form.Group>
      </Form>
    </>

  )
}

export default Screen