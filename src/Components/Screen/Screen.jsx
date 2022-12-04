import React from 'react'
import './screen.css'
import Message from '../Message/Message'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

import { ACTIONS } from '../../App'
import { useRef } from 'react'
import { useEffect } from 'react'

function Screen({dispatch, messageHistory}) {
  const bottomMsgRef = useRef(null);

  useEffect(()=>{
    bottomMsgRef.current?.scrollIntoView({behavior: 'smooth'});
  },[messageHistory])

  function handleSend(e){
    if(e.target[0].value.length > 0){
      const timeSent = new Date();
      const msgObject = {sender:'Leon', content:e.target[0].value, timeSent: timeSent}
      dispatch( { type:ACTIONS.ADDMSG, payload:msgObject});
      e.target[0].value = '';
    
    }else{
      alert('please do not send empty strings');
    }
  }

  function renderMessages(){
    return messageHistory.map((msg)=>{
      return <Message msgData={msg} key={msg.timeSent}/>
    })
  }

  return (
    <>
      <div id="screen">
        {renderMessages()}
        <div ref={bottomMsgRef}></div>
      </div>
      <Form onSubmit={(e)=> {e.preventDefault(); handleSend(e);}}>
      <Form.Group className='d-flex align-items-center my-2'>
        <Form.Control size="md" type="text" maxLength={125}/>
        <Button type="submit">Submit</Button>
      </Form.Group>
      </Form>
    </>

  )
}

export default Screen