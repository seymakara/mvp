import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/Movies';
import Customers from './components/Customers';
import Rental from './components/Rental';
import NotFound from './components/notFound';
import NavBar from './components/NavBar';
import ItemForm from './components/ItemForm';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className='container'>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/movies/:id' component={ItemForm} />
            <Route path='/movies' component={Movies} />
            <Route path='/customers' component={Customers} />
            <Route path='/rentals' component={Rental} />
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
