// == Import npm
import React from 'react';
import { Message } from 'semantic-ui-react';

// == Import
import './Message.scss';

// == Composant
const MessageDiv = ({ nbDataRepo }) => (
  <div className="message">
    <Message className="message" visible>La recherche a donné {nbDataRepo} résultats</Message>
  </div>
);

// == Export
export default MessageDiv;
