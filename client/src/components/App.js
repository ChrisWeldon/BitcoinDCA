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
  Link
} from "react-router-dom";

import NightSwitch from '../containers/NightSwitch';
import Login from '../containers/Login'

function App({night_mode}) {
    return (
        <div className="App">
            <ThemeProvider theme={night_mode ? darkTheme : lightTheme}>
            <CssBaseline />
            {/*<React.StrictMode>*/}
            <Router>
                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/portal'>
                        <NightSwitch />
                    </Route>
                    <Route path='/'>
                        <NightSwitch />
                    </Route>
                </ Switch>
            </Router>
            {/*</ React.StrictMode>*/}
            </ThemeProvider>
        </div>
    );
}

export default App;
