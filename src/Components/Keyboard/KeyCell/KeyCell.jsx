import { Button } from "react-bootstrap"

function KeyCell(props) {
  return (
        <Button 
            className='keyCell' 
            key={props.val}  
            variant={props.litUp ? 'light':'outline-light'}>
            {props.val}
        </Button>
  )
}

export default KeyCell