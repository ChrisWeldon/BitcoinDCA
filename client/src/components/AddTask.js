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


export default function AddTask({ open, quitEditing, saveEditing}){
    const classes = useStyles()

    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    const [values, setValues] = useState({
        amount: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
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
                    label="Title"
                    defaultValue="New Task"
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
                <DayPicker/>
            </Grid>
            <Grid item>
                <TextField className={classes.textField}
                    label="Trade Time"
                    type="time"
                    variant="filled"
                    defaultValue="07:30"
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
                    value={values.amount}
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
                <Button color='secondary' className={ classes.save_button } variant='contained' onClick={() => quitEditing()}>
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
