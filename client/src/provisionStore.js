// provisionStore.js -> previously condigureStore.js

import React from 'react'
import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import { persistStore, persistReducer, createMigrate } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'


export default function provisionStore(){

    const loggerMiddleware = createLogger()

    const rootReducer = combineReducers({
        ...reducers,
    });

    const migrations = {
        0: function(state){
            return {
                ...state,
                authentication:{
                    ...state.authentication,
                    message:'hello'
                }
            }
        }
    }


    const persistConfig = {
        key: 'root',
        storage,
        //migrate: createMigrate(migrations, { debug: false }),
    }
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const middlewares = composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware));


    let store = createStore(persistedReducer, undefined, middlewares)
    let persistor = persistStore(store)
    return { store, persistor };
}
