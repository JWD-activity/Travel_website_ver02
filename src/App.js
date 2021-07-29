import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );

  // <Route exact path="/" component={HomePage} />
  // <Route path="/:id" component={UserPage} />
  // <Route path="/categories" component={CategoriesPage} />
  // <Route path="/categories/:id" component={IndividualCategoryPage} />
}

export default App;
