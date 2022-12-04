import { useReducer } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Keyboard from './Components/Keyboard/Keyboard';
import Screen from './Components/Screen/Screen';

export const ACTIONS = {
  ADDMSG: 'addMessage',
  RMMSG: 'rmMessage',
  RMALL: 'rmAllMessages',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADDMSG:
      return [...state, action.payload];

    default:
      break;
  }
}

function App() {
  const [highlightKey, setHighlightKey] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [messageState, dispatch] = useReducer(reducer, []);

  function handleKeyPress(e) {
    setHighlightKey('');
    setHighlightKey(e.key);
    setTimeout(() => setHighlightKey(''), 100);
  }

  return (
    <div className="App" onKeyDown={(e) => handleKeyPress(e)}>
      <section id="main-content" className="pt-2">
        <Screen dispatch={dispatch} messageHistory={messageState} />
        <Keyboard highlight={highlightKey} />
      </section>
    </div>
  );
}

export default App;
