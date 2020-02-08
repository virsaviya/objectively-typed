import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Wrapper } from './styles'; /* This {} shit is destructuring */

function Blog() {
  return (
    <Wrapper>
      {/* <PrettyLayer /> */}
      <Typography variant="h1" component="h1" gutterBottom>
        Coming Soon!
      </Typography>
      <Button
        onClick={() => console.log('Button clicked!')}
        variant="contained"
      >
        Get Notified!
      </Button>
    </Wrapper>
  );
}

export default Blog;
