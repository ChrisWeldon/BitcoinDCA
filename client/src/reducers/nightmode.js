import {
    FLIP_THEME
} from '../constants/actionTypes'

const initialState = {
    on : false
}

export default function(state = initialState, action){
    switch(action.type){
        case FLIP_THEME:
            return {
                ...state,
                on : !state.on
            }
        default:
            return state
    }
}
