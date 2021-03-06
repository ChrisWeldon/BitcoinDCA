import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const NightSwitchStyled = withStyles((theme)=>({
    switchBase: {
        color: theme.accent.violet,
        '&$checked': {
            color: theme.accent.yellow,
        },
        '&$checked + $track': {
            opacity:1,
            backgroundColor: theme.modes.light_paper,
        },
    },
    checked: {
    },
    track: {
        opacity:1,
        backgroundColor: theme.modes.dark_default,
    },
}))(Switch);

export default function NightSwitch({night_mode, flipTheme}){
    return (
        <FormGroup>
            <FormControlLabel
                control={<NightSwitchStyled checked={night_mode} onChange={() => flipTheme()} name="NightSwitch" />}

            />
        </FormGroup>
    )
}
