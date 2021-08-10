import {
    REQUEST_LOGIN,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
} from '../constants/actionTypes'

const initialState = {
    loggedIn: false,
    loggingIn: false,
    user : null
};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {
                ...state,
                loggingIn: true,
            };
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                loggingIn: false,
                user: action.user
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loggedIn:false,
                user:null
            };
        case LOGOUT:
            return {
                loggedIn: false,
                loggingIn:false,
                user:null
            };
        default:
            return state

    }
}
