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

export default function DayPicker({ }){
    const classes = useStyles();

    const [sun, setSunday] = useState(false);
    const [mon, setMonday] = useState(false);
    const [tue, setTuesday] = useState(false);
    const [wed, setWednesday] = useState(false);
    const [thu, setThursday] = useState(false);
    const [fri, setFriday] = useState(false);
    const [sat, setSaturday] = useState(false);


    return (
        <div className={classes.root}>
            <ButtonGroup size='small'>
                <Button onClick={()=>setSunday(!sun)} className={sun ? classes.on_button : classes.off_button}>
                    Su
                </Button>
                <Button onClick={()=>setMonday(!mon)} className={mon ? classes.on_button : classes.off_button}>
                    Mo
                </Button>
                <Button onClick={()=>setTuesday(!tue)} className={tue ? classes.on_button : classes.off_button}>
                    Tu
                </Button>
                <Button onClick={()=>setWednesday(!wed)} className={wed ? classes.on_button : classes.off_button}>
                    We
                </Button>
                <Button onClick={()=>setThursday(!thu)} className={thu ? classes.on_button : classes.off_button}>
                    Th
                </Button>
                <Button onClick={()=>setFriday(!fri)} className={fri ? classes.on_button : classes.off_button}>
                    Fr
                </Button>
                <Button onClick={()=>setSaturday(!sat)} className={sat ? classes.on_button : classes.off_button}>
                    Sa
                </Button>
            </ButtonGroup>
        </div>
    )
}
