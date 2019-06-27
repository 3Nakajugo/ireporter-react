import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from '../redux/store';
import Home from './Home/Home';
import Login from './Login/login';
import Signup from '../containers/signupContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <ToastContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
