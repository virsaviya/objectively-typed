import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './styles'; /* This {} shit is destructuring */

function Blog() {
  const history = useHistory();

  const goTo = route => history.push(route);

  return (
    <Wrapper>
      {/* <PrettyLayer /> */}
      <Typography variant="h1" component="h1" gutterBottom>
        Coming Soon!
      </Typography>
      <Button onClick={() => goTo('/newsletter')} variant="contained">
        Get Notified!
      </Button>
    </Wrapper>
  );
}

export default Blog;
