import React, { useState } from 'react'
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
    },
    button:{
        justifyContent:'left',
        height: 50,
        width:300
    }
}));


export default function Login({ login }){
    const classes = useStyles()
    const [username, setUser] = useState('');
    const [password, setPass] = useState('');
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
                <form id='login' className={classes.form}>
                    <div>
                        <TextField
                          id="outlined-multiline-static"
                          label="email"
                          variant="outlined"
                          type='text'
                          className={classes.entry}
                          onChange={(e)=>setUser(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                          id="outlined-multiline-static"
                          label="password"
                          variant="outlined"
                          type='password'
                          className={classes.entry}
                          onChange={(e)=>setPass(e.target.value)}
                        />
                    </div>
                    <Button className={classes.button}
                     form='form1'
                     type='submit'
                     value="Submit"
                     variant="contained"
                     color="primary"
                     disableElevation
                     onClick={()=>login(username, password)}
                    >
                      Login
                    </Button>
                </form>
                <NightSwitch />
                </Paper>
            </Grid>
        </Grid>
    )
}
