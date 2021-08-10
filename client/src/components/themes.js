import { createTheme } from '@material-ui/core/styles';

export const lightTheme = createTheme({
    accent:{
        yellow:'#b58900',
        orange:'#cb4b16',
        red:'#dc322f',
        magenta: '#d33682',
        violet:'#6c71c4 ',
        blue: '#268bd2',
        cyan: '#2aa198',
        green: '#859900',
    },
    modes:{
        dark_default:'#073642',
        dark_paper:'#002b36',
        light_default:'#fdf6e3',
        light_paper:'#eee8d5'
    },
    palette: {
        background:{
            default:'#fdf6e3',
            paper:'#eee8d5'
        },
        text:{
            primary:'#586e75',
            secondary: '#657b83',
            disabled:'#839496',
            hint:'#93a1a1'
        },
        primary:{
            main: '#b58900' // accent yellow
        },
        secondary:{
            main: '#cb4b16' // accent orange
        },
        error:{
            main: '#dc322f' // accent red
        },
        warning:{
            main: '#d33682' // accent magenta
        },
        info:{
            main: '#2aa198' // accent cyan
        },
        success:{
            main: '#859900' // accent green
        },
    },
});

export const darkTheme = createTheme({
    accent:{
        yellow:'#b58900',
        orange:'#cb4b16',
        red:'#dc322f',
        magenta: '#d33682',
        violet:'#6c71c4 ',
        blue: '#268bd2',
        cyan: '#2aa198',
        green: '#859900',
    },
    modes:{
        dark_default:'#073642',
        dark_paper:'#002b36',
        light_default:'#fdf6e3',
        light_paper:'#eee8d5'
    },
    palette: {
        background:{
            default:'#073642',
            paper:'#002b36'
        },
        text:{
            primary:'#93a1a1',
            secondary:'#839496',
            disabled:'#657b83',
            hint:'#586e75',
        },
        primary:{
            main: '#b58900' // accent yellow
        },
        secondary:{
            main: '#cb4b16' // accent orange
        },
        error:{
            main: '#dc322f' // accent red
        },
        warning:{
            main: '#d33682' // accent magenta
        },
        info:{
            main: '#2aa198' // accent cyan
        },
        success:{
            main: '#859900' // accent green
        },
        base03:{
            main: '#002b36', // Dark Theme Paper
        },
        base02:{
            main: '#073642', // Dark Theme background
        }
    },
});
