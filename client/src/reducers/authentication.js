import {
    REQUEST_LOGIN,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REQUEST_LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLOSE_LOGIN_PROMPT
} from '../constants/actionTypes'

const initialState = {
    logged_in: false,
    logging_in: false,
    logging_out: false,
    prompt_open: false,
    message: '',
    user: {
        name: null
    }
};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {
                ...state,
                logging_in: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                logged_in: true,
                logging_in: false,
                user: action.user
            };
        case LOGIN_FAIL:
            return {
                ...state,
                logged_in:false,
                prompt_open:true,
                message: action.message,
                user: initialState.user
            };
        case REQUEST_LOGOUT:
            return {
                ...state,
                logging_out:true,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                logged_in:false,
                logging_out:false,
                user: initialState.user
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                logging_out:false,
                message: 'Failed to logout.'
            }
        case CLOSE_LOGIN_PROMPT:
            return{
                ...state,
                prompt_open: false
            }
        default:
            return state

    }
}
