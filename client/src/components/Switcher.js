import React from 'react';

export default function Switcher({on, flip_switch}){
    console.log(on)
    return (
         <button onClick={()=>flip_switch()} type="button">{on ? 'ON': 'OFF'}</button>
    )
}
