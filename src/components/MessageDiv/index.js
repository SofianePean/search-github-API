// == Import npm
import React from 'react';
import { Message } from 'semantic-ui-react';

// == Import
import './Message.scss';

// == Composant
const MessageDiv = () => {
  
  return(
  <div className="message">
    <Message className="message" visible>You can always see me</Message>
  </div>
);
}

// == Export
export default MessageDiv;
