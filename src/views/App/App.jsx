import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from '../Home/Home';
import NotFound from '../NotFound./NotFound';

function App() {
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
        <Route path="*" >
          <NotFound />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
