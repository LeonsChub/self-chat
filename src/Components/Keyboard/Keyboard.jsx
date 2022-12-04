import { useEffect } from 'react';
import Button  from 'react-bootstrap/Button'
import KeyCell from './KeyCell/KeyCell';
import './keyboard.css'


function Keyboard(props) {
  const qwertyArr = 'q w e r t y u i o p a s d f g h j k l z x c v b n m'.split(' ');
  const topRow = qwertyArr.splice(0,10);
  const midRow = qwertyArr.splice(0,9);
  const botRow = qwertyArr;
  

  function arrToBtn(arr){
    return arr.map((key)=>{
      if(props.highlight.toLowerCase() === key){
        return <KeyCell val={key} key={key} litUp={true}/>
      }
      return <KeyCell val={key} key={key}/>
    });
  }

  return (
    <div id="keyboard" className = 'my-1'>

        <div className="keyRow" id='topRow'>{arrToBtn(topRow)}</div>
        <div className="keyRow" id='midRow'>{arrToBtn(midRow)}</div>
        <div className="keyRow" id='botRow'>{arrToBtn(botRow)}</div>
    </div>
  )
}

export default Keyboard