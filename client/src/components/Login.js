import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, TextField, Paper, Button} from '@material-ui/core';
import NightSwitch from '../containers/NightSwitch';

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
    }
}));


export default function Login(){
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
                <form className={classes.form}>
                    <div>
                        <TextField
                          id="outlined-multiline-static"
                          label="email"
                          variant="outlined"
                          className={classes.entry}
                        />
                    </div>
                    <div>
                        <TextField
                          id="outlined-multiline-static"
                          label="password"
                          variant="outlined"
                          className={classes.entry}
                        />
                    </div>
                    <Button variant="contained" color="primary" disableElevation>
                      Login
                    </Button>
                </form>
                <NightSwitch />
                </Paper>
            </Grid>
        </Grid>
    )
}
