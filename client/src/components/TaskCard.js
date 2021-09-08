import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Typography, Container, Box, Card, Paper, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    card:{
        //padding: theme.spacing(1),
        margin: theme.spacing(1),
        backgroundColor: theme.palette.background.default,
        width: 300,
        border: 1,
        borderColor: theme.accent.orange
    }
}));

export default function TaskCard({ title, amount, time, deleteTask }){
    const classes = useStyles();
    return(
        <Paper className={classes.card} variant="outlined" square={true}>
        <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            alignItems="center">

            <Typography variant="h5" component="h2">
                { title }
            </Typography>

            <Box display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center">
                <Typography variant="subtitle1" component="h2">
                    { amount }
                </Typography>
                <Typography variant="subtitle2" component="h2">
                    { time }
                </Typography>
            </Box>
            <IconButton onClick = {() => deleteTask()} aria-label="delete" >
              <DeleteIcon fontSize="medium" />
            </IconButton>
        </Box>
        </Paper>
    )
}
