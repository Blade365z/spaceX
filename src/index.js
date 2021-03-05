import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';

import allreducers from './reducers';

import thunk from 'redux-thunk';



const store = createStore(allreducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))


ReactDOM.render(<Provider store={store}>
    <App />
</Provider >,
    document.getElementById('root'));