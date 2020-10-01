import React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar'
import { Toolbar, Button } from '@material-ui/core';
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

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Button to="/" component={Link}>Home</Button>
            <Button to="/about" component={Link}>About</Button>
            <Button to="/contact" component={Link}>Contact</Button>
          </Toolbar>
        </AppBar>
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

      </div>
    </Router>
  );
}

export default App;
