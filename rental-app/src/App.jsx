import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/Movies';
import Watchlist from './components/Watchlist';
import NotFound from './components/notFound';
import NavBar from './components/NavBar';
import ItemForm from './components/ItemForm';
import Signin from './components/Signin';
import Signup from './components/Signup';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className='container'>
          <Switch>
            <Route path='/signup' component={Signup} />
            <Route path='/signin' component={Signin} />
            <Route path='/movies/:id' component={ItemForm} />
            <Route path='/movies' component={Movies} />
            <Route path='/watchlist' component={Watchlist} />
            <Route path='/not-found' component={NotFound} />
            <Redirect from='/' exact to='/movies' />
            <Redirect to='/not-found' />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
