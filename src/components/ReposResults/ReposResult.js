// == Import npm
import React from 'react';
import { Card, Image } from 'semantic-ui-react';

// == Import
import './ReposResults.scss';

// == Composant
const ReposResult = () => (
  <Card className="card">
    <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
        fdfggfdg
        gfdgfgfdg
        gfdgfgf
        gfdgfdgfg
        fdgfgfg
        gfgfdg
      </Card.Description>
    </Card.Content>
  </Card>
);

// == Export
export default ReposResult;
