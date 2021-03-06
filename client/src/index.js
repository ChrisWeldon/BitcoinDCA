import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './containers/App';
import provisionStore from './provisionStore';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react'

//         MODERN React + Redux (go through tutorial)
// TODO: Learn slices to replace reducers
// TODO: Learn state hooks and react hooks
// TODO: Learn Selectors
//
// TODO: READ Standard Redux Patterns

let { store, persistor } = provisionStore()
persistor.purge()
render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
