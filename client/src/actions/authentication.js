import * as types from '../constants/actionTypes'
import formEncoder from '../helpers/formEncoder'
const base64 = require('base-64');

export const request_login = () => ({
    type: types.REQUEST_LOGIN
})

export const login_success = (user) => ({
    type: types.LOGIN_SUCCESS,
    user
})

export const login_fail = (err) => ({
    type: types.LOGIN_FAIL,
    message: err
})

export const request_register = () => ({
    type: types.REQUEST_REGISTER
})

export const register_success = (user) => ({
    type: types.REGISTER_SUCCESS,
})

export const register_fail = (err) => ({
    type: types.REGISTER_FAIL,
    message: err
})

export const request_logout = () => ({
    type: types.REQUEST_LOGOUT
})

export const logout_success = (user) => ({
    type: types.LOGOUT_SUCCESS,
})

export const logout_fail = (err) => ({
    type: types.LOGOUT_FAIL,
    message: err,
})

export const close_login_prompt = () => ({
    type: types.CLOSE_LOGIN_PROMPT
})

export const close_register_prompt = () => ({
    type: types.CLOSE_REGISTER_PROMPT
})

// Login thunk
export function login(username, password){
    return function(dispatch, getState){
        dispatch(request_login())

        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));

        fetch('http://localhost:5000/auth/login',
            {
                method:'POST',
                headers:headers
            })
            .then(res=>{
                if(res.status===401){
                    throw 'Incorrect Username/password'
                }
                return res.json()
            })
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.token);
                dispatch(login_success(res))
            })
            .catch(err => dispatch(login_fail(err)))
    }
}

// Register thunk
export function register(username, password){
    return function(dispatch, getState){
        dispatch(request_register())


        const details = {
            user: username,
            pass: password
        }


        fetch('http://localhost:5000/auth/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formEncoder(details)
            })
            .then(res=>{
                return res.json()
            })
            .then(res => {
                if('error' in res){
                    throw res['error']
                }
                dispatch(register_success(res))
                dispatch(login(username, password))
            })
            .catch(err => {
                dispatch(register_fail(err))
            })
    }
}

// Logout thunk
export function logout(){
    return function(dispatch, getState){
        dispatch(request_logout)


        const details = {
            token: localStorage.getItem('token')
        }

        fetch('http://localhost:5000/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'Authorization' : `Bearer ${details.token}`
                },
                // body: formEncoder(details)
            })
            .then(res=>{
                localStorage.clear();
                dispatch(logout_success())
            })
            .catch(err => dispatch(logout_fail(err)))

    }
}
