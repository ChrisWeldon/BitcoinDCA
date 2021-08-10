import * as types from '../constants/actionTypes'
let base64 = require('base-64');

export const flip_theme = () => ({
    type: types.FLIP_THEME
})

export const request_login = () => ({
    type: types.REQUEST_LOGIN
})

export const login_success = (user) => ({
    type: types.LOGIN_SUCCESS,
    user
})

export const login_fail = (err) => ({
    type: types.LOGIN_FAIL,
    error: err
})

export const login_logout = () => ({
    type: types.LOGOUT
})

// Login thunk
// Thunk
export function login(username, password){
    return function(dispatch, getState){
        console.log('Login Called')
        dispatch(request_login())

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };

        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));

        fetch(`http://localhost:5000/login`,
            {
                method:'POST',
                headers:headers
            })
            .then(res=>{
                if(res.status===401){
                    throw 'Login Failed'
                }
                return res.json()
            })
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res));
                dispatch(login_success(res))
            })
            .catch(err => dispatch(login_fail(err)))
    }
}
