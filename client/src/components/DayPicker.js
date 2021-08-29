import React, { useState } from 'react'
import { Button, ButtonGroup, Avatar, Chip } from '@material-ui/core';

import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // '& > *': {
        //     padding: theme.spacing(1),
        // },
    },
    on_button:{
        padding: theme.spacing(.5),
        color: theme.palette.background.paper,
        backgroundColor: theme.accent.yellow,

        "&:hover": {
            backgroundColor: theme.accent.yellow,
        }
    },
    off_button:{
        padding: theme.spacing(.5)
        //backgroundColor: theme.palette.primary
    }
}));

export default function DayPicker({ values, handleChange}){
    const classes = useStyles();

    // const [values, setValues] = useState({
    //     sun: false,
    //     mon: false,
    //     tue: false,
    //     wed: false,
    //     thu: false,
    //     fri: false,
    //     sat: false
    // });
    //
    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: !values[prop] });
    // };

    return (
        <div className={classes.root}>
            <ButtonGroup size='small'>
                <Button onClick={handleChange('sun')} className={values.sun ? classes.on_button : classes.off_button}>
                    Su
                </Button>
                <Button onClick={handleChange('mon')} className={values['mon'] ? classes.on_button : classes.off_button}>
                    Mo
                </Button>
                <Button onClick={handleChange('tue')} className={values['tue'] ? classes.on_button : classes.off_button}>
                    Tu
                </Button>
                <Button onClick={handleChange('wed')} className={values['wed'] ? classes.on_button : classes.off_button}>
                    We
                </Button>
                <Button onClick={handleChange('thu')} className={values['thu'] ? classes.on_button : classes.off_button}>
                    Th
                </Button>
                <Button onClick={handleChange('fri')} className={values['fri'] ? classes.on_button : classes.off_button}>
                    Fr
                </Button>
                <Button onClick={handleChange('sat')} className={values['sat'] ? classes.on_button : classes.off_button}>
                    Sa
                </Button>
            </ButtonGroup>
        </div>
    )
}
