import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, TextField, Paper, Button, Typography, IconButton} from '@material-ui/core';
import { Bar } from 'react-chartjs-2';
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import NightSwitch from '../containers/NightSwitch';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        width: '100vw',
        height: '100vh',
        flexGrow:1
    },
    welcome:{
        color:theme.accent.magenta
    },
    paper_grid:{
        minHeight:600,
        height: '80vh'
    },
    entry:{
        padding: theme.spacing(1)
    },
    chart:{
        width: 600
    },
    button:{
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        justifyContent:'left',
        height: 50,
        width: 200
    },
    paper_footer:{
        paddingTop: theme.spacing(1)
    },
    logout_button:{

    },
}));


const rand = () => Math.floor(Math.random() * 255);

const genData = () => ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
});

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const data = genData();
export default function Home({ username, logout, startEditingNew }){
    console.log("USERNAME : " + username)
    const classes = useStyles()

    return (
        <Grid className={classes.paper_grid}
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
        >
            <Grid item>
                <Typography className={classes.welcome} variant="h1" component="h2">
                 Hello, {username}.
                </Typography>
            </Grid>

            <Grid item
             className={classes.entry}
             container
             direction="row"
             justifyContent="center"
             alignItems="center"
             className={classes.bottom_row}
            >
                <Grid item>
                    <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={()=>startEditingNew()}
                    startIcon={<AddAlarmIcon />}
                    >
                        Schedule Task
                    </Button>
                </Grid>
            </Grid>

            <Grid item className={classes.chart}>
                <Bar
                 data={data}
                 options={options}
                />
            </Grid>


            <Grid item
             container
             direction="row"
             justifyContent="space-between"
             alignItems="center"
             className={classes.paper_footer}
            >
                <NightSwitch />
                <Button className={classes.logout_button}
                 variant="contained"
                 color="primary"
                 disableElevation
                 onClick={()=>logout()}
                >
                  Logout
                </Button>
            </Grid>
        </Grid>
    )
}
