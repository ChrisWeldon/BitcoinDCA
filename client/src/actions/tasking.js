import * as types from '../constants/actionTypes'
import formEncoder from '../helpers/formEncoder'

export const start_editing = () => ({
    type: types.START_EDITING
})

export const stop_editing = () => ({
    type: types.STOP_EDITING
})

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
                    //token: localStorage.getItem('token')
                })
            })
            .then(res=>{
                return res.json()
            })
            .then(res => {
                console.log(res)
                if('error' in res){
                    throw res['error']
                }
                dispatch(update_success(res))
                dispatch(stop_editing())
            })
            .catch(err => {
                dispatch(update_fail(err))
            })
    }
}
