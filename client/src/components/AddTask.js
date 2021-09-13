import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography,
    Dialog, DialogTitle,
    FormControl, InputLabel,
    FilledInput, InputAdornment, TextField,
    IconButton } from '@material-ui/core';
import { KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';
import DeleteIcon from '@material-ui/icons/Delete';

import NightSwitch from '../containers/NightSwitch';
import DayPicker from './DayPicker';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        paddingTop:theme.spacing(0)
    },
    amount:{
        margin: theme.spacing(1)
    },
    textField: {
        margin: theme.spacing(1),
        width: 200,
    },
    save_button:{
        margin: theme.spacing(1),
    }
}));


export default function AddTask({ open, quitEditing, saveTask}){
    const classes = useStyles()

    const [values, setValues] = useState({
        amount: 0,
        time: '07:30',
        title: 'New Task'
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const [days, setDays] = useState({
        sun: false,
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false
    });

    const handleDayChange = (prop) => (event) => {
        setDays({ ...days, [prop]: !days[prop] });
    };


    const full_width = true;
    const max_width = 'xs'
    const exists = true;
    return (
        <Dialog
        open={open}
        fullWidth={full_width}
        maxWidth={max_width}
        >
        <DialogTitle id="simple-dialog-title">Schedule Task</DialogTitle>
        <Grid
        className={classes.root}
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        >
            <Grid item container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            >
                <TextField className={classes.textField}
                    //label="Title"
                    placeholder={values.title}
                    onChange={handleChange('title')}
                />
                {
                    exists ?
                    <IconButton aria-label="delete" >
                      <DeleteIcon fontSize="medium" />
                    </IconButton>
                    :
                    <></>

                }
            </Grid>
            <Grid item>
                <DayPicker values={days} handleChange={handleDayChange}/>
            </Grid>
            <Grid item>
                <TextField className={classes.textField}
                    label="Trade Time"
                    type="time"
                    variant="filled"
                    defaultValue={values.time}
                    onChange={handleChange('time')}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                />
                <FormControl className={classes.textField} variant="filled">
                    <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                    <FilledInput
                    id="filled-adornment-amount"
                    defaultValue={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl>
            </Grid>
            <Grid item container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            >
                <Button color='secondary'
                className={ classes.save_button }
                variant='contained'
                onClick={() => saveTask({
                    ...values,
                    ...days
                })}>
                    Save
                </Button>
                <Button color='primary' className={ classes.save_button } variant='contained' onClick={() => quitEditing()}>
                    Quit
                </Button>
            </Grid>
        </Grid>
        </Dialog>
    )
}
