import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, TextField, Paper, Button, Snackbar, Typography } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
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
    link:{
        padding:theme.spacing(1),
        passingBottom:theme.spacing(2),
        textAlign: 'left',
    },
    linkText:{
        color: theme.palette.text.secondary,
        '&:hover': {
           color: theme.palette.text.hint
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


export default function Register({ logged_in, register_message, prompt_open, register, closePrompt}){
    const classes = useStyles()
    const [username, setUser] = useState('');
    const [password, setPass] = useState('');
    const [passwordconf, setPassConf] = useState('');

    const history = useHistory();
    if(logged_in){
        history.push('/portal')
    }

    var vertical= 'bottom'
    var horizontal= 'center'


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
                <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  autoHideDuration={6000}
                  open={prompt_open}
                  onClose={()=>closePrompt()}
                  message={register_message}
                  key={vertical + horizontal}
                >
                    <MuiAlert elevation={6} variant='filled' onClose={()=>closePrompt()} severity="error">
                        { register_message }
                    </MuiAlert>
                </Snackbar>
                <form id='login' className={classes.form}>
                    <div>
                        <TextField
                          id="outlined-multiline-static"
                          label="username"
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
                    <div>
                        <TextField
                          id="outlined-multiline-static"
                          label="confirm password"
                          variant="outlined"
                          type='password'
                          className={classes.entry}
                          onChange={(e)=>setPassConf(e.target.value)}
                        />
                    </div>
                    <Button className={classes.button}
                     form='form1'
                     type='submit'
                     value="Submit"
                     variant="contained"
                     color="primary"
                     disabled={password!=passwordconf || password===''}
                     disableElevation
                     onClick={()=>register(username, password)}
                    >
                      Register
                    </Button>
                </form>
                <Typography className={classes.link}>
                    <Link className={classes.linkText} to="/login">Login</Link>
                </Typography>
                <NightSwitch />
                </Paper>
            </Grid>
        </Grid>
    )
}
