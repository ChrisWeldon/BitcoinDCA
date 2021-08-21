import './App.css';
import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { Grid, TextField } from '@material-ui/core';
import {lightTheme, darkTheme } from './themes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import NightSwitch from '../containers/NightSwitch';
import Login from '../containers/Login'
import Register from '../containers/Register'
import Portal from '../containers/Portal'

function App({ night_mode, logged_in }) {
    return (
        <div className="App">
            <ThemeProvider theme={night_mode ? darkTheme : lightTheme}>
            <CssBaseline />
            {/*<React.StrictMode>*/}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Router>
                    <Switch>
                        <Route path='/login'>
                            <Login />
                        </Route>
                        <Route path='/register'>
                            <Register />
                        </Route>
                        <Route path='/portal'>
                            <Portal />
                        </Route>
                        <Route path='/'>
                            <Redirect to={
                                logged_in ? '/portal' : '/login'
                            } />
                        </Route>
                    </ Switch>
                </Router>
                {/*</ React.StrictMode>*/}
            </MuiPickersUtilsProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
