import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, TextField, Paper, Button, Typography, IconButton, Box} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { de } from 'date-fns/locale';
import { format } from 'date-fns'

import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import NightSwitch from '../containers/NightSwitch';
import TaskCard from '../containers/TaskCard';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        width: '100vw',
        //height: '100vh',
        flexGrow:1
    },
    welcome:{
        color:theme.accent.magenta
    },
    paper_grid:{
        minHeight:600,
        //minHeight: '80vh',
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
    tasks_panel:{
        //backgroundColor: theme.palette.background.default,
    }
}));


const rand = () => Math.floor(Math.random() * 255)

const genData = (labels, points) => ({
  labels: labels,

  datasets: [
    {
      type: 'bar',
      //label: 'Dataset 1',
      backgroundColor: `rgb(${255}, ${0}, ${255})`,
      barThickness:20,
      data: points,
      //borderColor: 'white',
      //borderWidth: 1,
    },
  ],
});

const options = {
    plugins:{
        legend: {
            display: false
        }
    },
    scales: {
        yAxes:
          {
            ticks: {
              beginAtZero: true,
            },
            type: 'linear',
            display: true,
            position: 'left ',
            id: 'y-axis-2',
            gridLines: {
              drawOnArea: true,
            },
          },
        xAxes: {
            type: 'time',
            grouped:true,
            scaleLabel: {
                display: true,
            },
            time: {
                unit: 'hour',
                stepSize: 24, // I'm using 3 hour intervals here
                tooltipFormat: 'EEEE hh:mmaaa',
                displayFormats: {
                   'hour': 'EEEEEE, MMM dd',
                   'day': 'EEEEEE, MMM dd',
                }
            },
            grid:{
                offset:false
            },
            ticks: {
                display:true,
                major: {
                    enabled: true, // <-- This is the key line
                    fontStyle: 'bold', //You can also style these values differently
                    fontSize: 14 //You can also style these values differently
                },
            },
        }
  },
};

export default function Home({ username, logout, tasks, tasks_loaded, tasks_loading, startEditingNew, getTasks}){

    const [week, changeWeek] = useState(0)

    var labels = []
    var points = []
    for(var i=0;i<168;++i){
        labels.push(format(new Date(2021, 7, 29+7*week, i), 'yyyy-MM-dd HH:mm'))
        points.push(i%20==0 ? rand() : 0)
    }

    const data = genData(labels, points);

    const classes = useStyles()
    if(!tasks_loaded && !tasks_loading)
        getTasks()
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
                <IconButton
                onClick={()=>changeWeek(week-1)}
                >
                    <NavigateBeforeIcon/>
                </IconButton>
                <IconButton
                onClick={()=>changeWeek(week+1)}
                >
                    <NavigateNextIcon/>
                </IconButton>
            </Grid>

            <Grid item className={classes.tasks_panel}>
                {
                    tasks.map((task)=>(<TaskCard title={task.title} amount={task.amount} time={task.time} id={task.id}/>))
                }
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
