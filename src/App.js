import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Keyboard from './Components/Keyboard/Keyboard';
import Screen from './Components/Screen/Screen';

function App() {
  const [highlightKey, setHighlightKey] = useState('');

  function handleKeyPress(e) {
    setHighlightKey(e.key);
    setTimeout(() => setHighlightKey(''), 150);
  }

  return (
    <div className="App" onKeyDown={(e) => handleKeyPress(e)}>
      <section id="main-content" className="pt-2">
        <Screen />
        <Keyboard highlight={highlightKey} />
      </section>
    </div>
  );
}

export default App;
