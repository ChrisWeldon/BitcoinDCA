import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Typography, Container, Box, Card, Paper, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    card:{
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        borderRadius: 8,
        margin: theme.spacing(1),
        backgroundColor: theme.accent.green, // sell is red
        transition: "background .3s, color .3s",
        "&:hover": {
            backgroundColor: theme.accent.green + "BB",
        },
        width: 300,
        color: theme.palette.background.paper
    }
}));

export default function TaskCard({ title, amount, time, deleteTask }){
    const classes = useStyles();
    return(
        <Box onClick={()=>console.log("TODO: EDIT")} className={classes.card} variant="outlined" square={true}
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
    )
}
