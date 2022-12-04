import './message.css'
import { Card } from 'react-bootstrap'
function Message({sender,content}) {
  return (
        <Card className="msgWrap">

          <Card.Header className='textSender'>
            {sender}
          </Card.Header>

          <Card.Body className='textContent'>
            <Card.Text>
              {content}
            </Card.Text>
          </Card.Body>
        </Card>
  )
}

export default Message