import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Container} from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";

import Home from '../containers/Home'
import AddTask from '../containers/AddTask'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(2),
        margin: 'auto',
    }
}));

export default function Portal({logout, logged_in }){
    const history = useHistory();
    if(!logged_in){
        history.push('/login')
    }

    const classes = useStyles()


    return(
        <Container
        maxWidth={'md'}
        >
            <Paper className={classes.paper}>
                <Home/>
                <AddTask/>
            </Paper>
        </Container>
    )
}
