import Message from './Message';
function welcome(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <Message message="how are you ?" />
    </div>
  );
}

export default welcome;
