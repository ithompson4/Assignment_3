import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import Header from './components/Dashboard/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Pokemon from './components/Pokemon/Pokemon';

function App() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
}

export default App;