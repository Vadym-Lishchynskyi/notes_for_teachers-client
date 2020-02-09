import React,{ Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import blue from '@material-ui/core/colors/blue';
//Components
import NavBar from './components/Navbar';

// Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#448aff',
    }
  },
  typography:{
    useNextVariants: true
  }
});


class  App extends Component {
  render() {
    return(
      <MuiThemeProvider theme= {theme}>
        <div className='App'>
        <Router>
          <NavBar/>
            <div className='container'>
            <Switch>
              <Route exact path ='/' component ={home}/>
              <Route exact path ='/login' component ={login}/>
              <Route exact path ='/signup' component ={signup}/>
            </Switch>
          </div>
        </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;