import Button from 'react-bootstrap/Button';
import Keyboard from './Components/Keyboard/Keyboard';
import Screen from './Components/Screen/Screen';

function App() {
  return (
    <div className="App">
      <section id="main-content" className="pt-2">
        <Screen />
        <Keyboard />
      </section>
    </div>
  );
}

export default App;
