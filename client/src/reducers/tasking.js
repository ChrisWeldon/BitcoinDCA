import {
    START_EDITING,
    STOP_EDITING,

    UPDATE_REQUEST,
    UPDATE_FAILED,
    UPDATE_SUCCEED,
    DELETE_REQUEST,
    DELETE_SUCCEED,
    DELETE_FAILED

} from '../constants/actionTypes'

const initialState = {
    loading: false,
    editing : false,
    days:{
        sun: false,
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false
    },
    title: 'New Task',
    time: '7:30 AM',
    amount: 0

}

export default function(state = initialState, action){
    switch(action.type){
        case START_EDITING:
            return {
                ...state,
                editing: true,
            }
        case STOP_EDITING:
            return {
                ...state,
                editing: false,
            }
        default:
            return state
    }
}
