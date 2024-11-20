import React, { useState } from 'react';
import ComponentA from './One Flie';
import ComponentB from './TwoFile';

function ParentComponent() {
  const [message, setMessage] = useState(''); //state-message,setMessage-setState
  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };
  return (
    <div>
      <ComponentA onButtonClick={updateMessage} />
      <ComponentB message={message}/>
    </div>
  );
}
export default ParentComponent;