import './App.css';
import Welcome from './welcome';
import Message from './Message';
import Clock from './Clock';
import ToggleButton from './ToggleButton';
import Greeting from './Greeting';
import LoginControl from './LoginControl';

function App() {
  return (
    <div>
      <LoginControl hasNewMessage={true} credit={100} hasWarning={true} />
    </div>
  );
}

export default App;
