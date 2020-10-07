import React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar'
import { Toolbar, Button, Drawer, makeStyles } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import NotFound from '../NotFound./NotFound';
import Bulle from '../Bulle/Bulle';

const useStyles = makeStyles({
  App: {
    boxSizing: 'border-box',
    height: "100%",
    // paddingTop: "2rem",
    // textAlign: 'center'
  },

})

function App() {
  const classes = useStyles();
  return (
    <Router>
      {/* <AppBar position="fixed" style={{ background: 'white' }}>
          <Toolbar style={{ color: 'white' }} >
            <Button to={{ pathname: "/" }} component={Link} color="primary">Capsaudio</Button>
          </Toolbar>
          <Drawer></Drawer>
        </AppBar> */}
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/bulles/:id">
          <Bulle />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
        <Route path="/contact" >
          <Contact />
        </Route>
        <Route path="*" >
          <NotFound />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
