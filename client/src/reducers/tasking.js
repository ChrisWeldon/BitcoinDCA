import {
    START_EDITING,
    STOP_EDITING,
    RETRIEVE_TASKS_REQUEST,
    RETRIEVE_TASKS_SUCCESS,
    RETRIEVE_TASKS_FAIL,
    UPDATE_REQUEST,
    UPDATE_FAIL,
    UPDATE_SUCCESS,

    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAIL,

    LOGOUT_SUCCESS
} from '../constants/actionTypes'


// TODO put clean up this state to better partition the
const initialState = {
    editing : false,
    update_loading: false,
    delete_loading: false,
    tasks:[],
    tasks_loaded: false,
    tasks_loading: false,
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
    amount: 0,

}

export default function(state = initialState, action){
    switch(action.type){
        // Screen state
        case LOGOUT_SUCCESS:
            return {
                ...initialState
            }
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

        // AJAX state
        case UPDATE_REQUEST:
            return {
                ...state,
                edit_loading: true
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                edit_loading: false,
                editing: false
            }
        case UPDATE_FAIL:
            return {
                ...state,
                edit_loading: false
            }

        case DELETE_TASK_REQUEST:
            return {
                ...state,
                delete_loading: false
            }
        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                delete_loading: false,
                editing: false
            }
        case DELETE_TASK_FAIL:
            return {
                ...state,
                delete_loading: false
            }

        case RETRIEVE_TASKS_REQUEST:
            return {
                ...state,
                tasks_loading: true
            }
        case RETRIEVE_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.payload,
                tasks_loading: false,
                tasks_loaded: true
            }
        case RETRIEVE_TASKS_FAIL:
            return {
                ...state,
                tasks: [],
                tasks_loading: false,
                tasks_loaded: false
            }
        default:
            return state
    }
}
