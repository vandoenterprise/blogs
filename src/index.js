import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import App from './components/App';
import 'semantic-ui-css/semantic.css';

const store = createStore(reducers, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
