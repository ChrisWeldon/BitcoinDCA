import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, TextField, Paper, Button, Typography} from '@material-ui/core';
import NightSwitch from '../containers/NightSwitch';
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        width: '100vw',
        height: '100vh',
        flexGrow:1
    },
    paper: {
        padding: theme.spacing(3),
        margin: 'auto',
    },
    form:{
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    entry:{
        justifyContent:'left',
        width:300
    },
    button:{
        justifyContent:'left',
        height: 50,
        width:300
    }
}));


export default function Portal({ logout, logged_in }){
    const history = useHistory();
    if(!logged_in){
        history.push('/login')
    }

    const classes = useStyles()


    return(
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.mainGrid}
        >
            <Grid item>
                <Paper className={classes.paper}>
                    <Typography variant="h1" component="h2">
                     Portal Goes Here.
                    </Typography>

                    <Button className={classes.button}
                     variant="contained"
                     color="primary"
                     disableElevation
                     onClick={()=>logout()}
                    >
                      Logout
                    </Button>
                <NightSwitch />
                </Paper>
            </Grid>
        </Grid>
    )
}
