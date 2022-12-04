import './message.css'
import { Card } from 'react-bootstrap'
function Message({msgData}) {

  function formatTime(time){
    let hours = time.getHours();
    let mins = time.getMinutes();

    return `${hours < 10 ? `0${hours}`: hours}:${mins< 10 ? `0${mins}`: mins}`
  }


  return (
        <Card className="msgWrap">

          <Card.Header className='textSender'>
            {msgData.sender}
          </Card.Header>

          <Card.Body className='textContent'>
            <div className="d-flex align-items-end">
              <Card.Text className='m-0'>
                {msgData.content}
              </Card.Text>

              <Card.Text className='timeStamp'>
                {formatTime(msgData.timeSent)}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
  )
}

export default Message