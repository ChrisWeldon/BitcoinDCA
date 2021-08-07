import {
    FLIP_SWITCH
} from '../constants/actionTypes'

const initialState = {
    on : false
}

export default function(state = initialState, action){
    switch(action.type){
        case FLIP_SWITCH:
            return {
                ...state,
                on : !state.on
            }
        default:
            return state
    }
}
