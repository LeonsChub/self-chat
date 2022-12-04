import './message.css'
import { Card } from 'react-bootstrap'
function Message() {
  return (
        <Card className="msgWrap">

          <Card.Header className='textSender'>
            Leon
          </Card.Header>

          <Card.Body className='textContent'>
            <Card.Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius minus debitis animi! Explicabo ullam quod corporis fuga, magnam cupiditate odit.
            </Card.Text>
          </Card.Body>
        </Card>
  )
}

export default Message