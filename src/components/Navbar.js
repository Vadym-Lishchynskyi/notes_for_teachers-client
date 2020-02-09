import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

//MUI
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import { Button } from '@material-ui/core';

class home extends Component {
  render() {
    return(
      <AppBar>
          <Toolbar className='nav-menu' class='menu'>
            <Button color='inherit' component={Link} to='/login'>
              Log in
            </Button>
            <Button color='inherit' component={Link} to='/'>
              Home
            </Button>
            <Button color='inherit' component={Link} to='/signup'>
              Sign up
            </Button>
          </Toolbar>
      </AppBar>   
    );
  }
}

export default home;

