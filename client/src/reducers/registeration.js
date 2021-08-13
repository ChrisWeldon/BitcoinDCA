import {
    REQUEST_REGISTER,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    CLOSE_REGISTER_PROMPT
} from '../constants/actionTypes'

const initialState = {
    registering: false,
    prompt_open: false,
    message:null
};

export default function registration(state = initialState, action) {
    switch (action.type) {
        case REQUEST_REGISTER:
            return {
                ...state,
                registering: true,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                prompt_open: true,
                registering: false,
                message: action.message
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
            };
        case CLOSE_REGISTER_PROMPT:
            return {
                ...state,
                prompt_open: false
            }
        default:
            return state

    }
}
