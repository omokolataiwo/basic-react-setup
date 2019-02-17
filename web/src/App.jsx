import React, { useState } from 'react';
import propTypes from 'prop-types';

const Prompt = ({ onUpdateMessage }) => {
  const [message, setMessage] = useState('');
  const handleUpdateMessage = (e) => {
    e.preventDefault();
    onUpdateMessage(message);
  };

  return (
    <form onSubmit={handleUpdateMessage}>
      <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
    </form>
  );
};

Prompt.propTypes = {
  onUpdateMessage: propTypes.func.isRequired
};

const Screen = ({ message }) => (<h2>{message}</h2>);
Screen.propTypes = {
  message: propTypes.string
};
Screen.defaultProps = {
  message: ''
};

const Message = { Prompt, Screen };

const App = () => {
  const [message, setMessage] = useState('');
  return (
    <div>
      <Message.Prompt onUpdateMessage={setMessage} />
      <Message.Screen message={message} />
    </div>
  );
};


export default App;
