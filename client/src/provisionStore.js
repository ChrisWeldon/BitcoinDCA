import React from 'react'
import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

export default function provisionStore(){
    const loggerMiddleware = createLogger()

    const rootReducer = combineReducers({
        ...reducers,

    });

    const middlewares = composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware));

    return createStore(rootReducer, undefined, middlewares);
}
