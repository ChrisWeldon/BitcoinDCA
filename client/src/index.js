import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App';
import provisionStore from './provisionStore';
import reportWebVitals from './reportWebVitals';
import {flip_switch} from './actions';


//         MODERN React + Redux (go through tutorial)
// TODO: Learn slices to replace reducers
// TODO: Learn state hooks and react hooks
// TODO: Learn Selectors
//
// TODO: READ Standard Redux Patterns

let store = provisionStore()
store.dispatch(flip_switch())
render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
