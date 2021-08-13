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
        console.log('Login Called')
        dispatch(request_login())

        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));

        fetch('http://localhost:5000/login',
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
                //localStorage.setItem('user', JSON.stringify(res));
                dispatch(login_success(res))
            })
            .catch(err => dispatch(login_fail(err)))
    }
}

// Register thunk
export function register(username, password){
    return function(dispatch, getState){
        console.log('Register Called')
        console.log(username + ' '+ password)
        dispatch(request_register())

        const details = {
            user: username,
            pass: password
        }

        console.log("after req")

        // This formatting is all for url-encoded forms. Consider using multi-part/formbody MIME
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch('http://localhost:5000/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody
            })
            .then(res=>{
                console.log(res)
                return res.json()
            })
            .then(res => {
                if('error' in res){
                    throw res['error']
                }
                //localStorage.setItem('user', JSON.stringify(res));
                dispatch(register_success(res))
                dispatch(login(username, password))
            })
            .catch(err => {
                console.log(err)
                dispatch(register_fail(err))
            })
    }
}

// Logout thunk
export function logout(){
    return function(dispatch, getState){
        dispatch(request_logout)

        fetch('http://localhost:5000/logout')
            .then(res=>{
                dispatch(logout_success())
            })
            .catch(err => dispatch(register_fail(err)))

    }
}
