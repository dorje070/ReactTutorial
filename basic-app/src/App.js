import './App.css';

function App() {
  function formatName(UserName) {
    return UserName.toUpperCase();
  }
  function getGreeting(username) {
    if (username) {
      return <h1>Hello {formatName(username)}</h1>;
    } else {
      return <h1>Hello Stranger</h1>;
    }
  }
  const name = 'Dorje Tamang';
  const userImage = '/logo192.png';
  const image = <img className="sample-class" src={userImage} alt="logo" />;
  const element = (
    <div>
      <h1>Hello {name}</h1>
      <p>Good to see You</p>
      {image}
    </div>
  );
  return element;
}

export default App;
