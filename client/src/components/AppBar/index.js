import React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const _AppBar = () => {
  const history = useHistory();

  const goTo = route => history.push(route);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Button onClick={() => goTo('/')}>Home</Button>
          <Button onClick={() => goTo('/about')}>About</Button>
          <Button onClick={() => goTo('/blog')}>Blog</Button>
          <Button onClick={() => goTo('/wiki')}>Wiki</Button>
          <Button onClick={() => goTo('/newsletter')}>Newsletter</Button>
          <Button onClick={() => goTo('/resources')}>Resources</Button>
          <Button onClick={() => goTo('/contribute')}>Contribute</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default _AppBar;
