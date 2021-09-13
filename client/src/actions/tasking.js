import * as types from '../constants/actionTypes'
import formEncoder from '../helpers/formEncoder'
import { logout_success } from './authentication'
import { is401 } from './helpers'
// Screen state

export const start_editing = () => ({
    type: types.START_EDITING
})

export const stop_editing = () => ({
    type: types.STOP_EDITING
})

// AJAX state

export const update_request = () => ({
    type: types.UPDATE_REQUEST
})

export const update_success = () => ({
    type: types.UPDATE_SUCCESS
})

export const update_fail = () => ({
    type: types.UPDATE_FAIL
})


// Register thunk
export function saveTask(args){
    return function(dispatch, getState){
        dispatch(update_request())
        // vet args

        // This formatting is all for url-encoded forms. Consider using multi-part/formbody MIME

        let token = localStorage.getItem('token')
        fetch('http://localhost:5000/tasks/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization' : `Bearer ${token}`
                },
                body: formEncoder({
                    ...args,
                })
            })
            .then(is401(() => dispatch(logout_success())))
            .then(res => {
                console.log(res)
                if('error' in res){
                    throw res['error']
                }
                dispatch(update_success(res))
                dispatch(getTasks())
                dispatch(stop_editing())
            })
            .catch(err => {
                //console.log(err);
                console.log('ERROR: ', err)
                dispatch(update_fail(err))
            })
    }
}

export const get_tasks_request = () => ({
    type: types.RETRIEVE_TASKS_REQUEST
})

export const get_tasks_success = (tasks) => ({
    type: types.RETRIEVE_TASKS_SUCCESS,
    payload: tasks
})

export const get_tasks_fail = (err) => ({
    type: types.RETRIEVE_TASKS_FAIL,
    err
})

export function getTasks(){
    return function (dispatch, getState){
        console.log("TASKS FOUND")
        dispatch(get_tasks_request())
        let token = localStorage.getItem('token')
        fetch('http://localhost:5000/tasks/',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization' : `Bearer ${token}`
                },
            })
            .then(is401(() => dispatch(logout_success())))
            .then(res => {
                if('error' in res){
                    throw res['error']
                }
                dispatch(get_tasks_success(res))
            })
            .catch(err => {
                dispatch(get_tasks_fail(err))
            })
    }
}

export const delete_request = () => ({
    type: types.DELETE_TASK_REQUEST
})

export const delete_success = () => ({
    type: types.DELETE_TASK_SUCCESS
})

export const delete_fail = () => ({
    type: types.DELETE_TASK_FAIL
})

export function deleteTask(task_id){
    return function(dispatch, getState){
        dispatch(delete_request())
        // vet args

        // This formatting is all for url-encoded forms. Consider using multi-part/formbody MIME

        let token = localStorage.getItem('token')
        fetch('http://localhost:5000/tasks/' + parseInt(task_id),
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization' : `Bearer ${token}`
                },
            })
            // TODO refactor logout back and forth, having logout_success as the final call is confusing
            .then(is401(() => dispatch(logout_success()))) // returns res.json(), calls logout_success on fail
            .then(res => {
                dispatch(delete_success())
                dispatch(getTasks())
                dispatch(stop_editing())
            })
            .catch(err => {
                console.log(err);
                dispatch(delete_fail(err))
            })
    }
}
