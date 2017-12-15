import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/sagas';

const defaultState = {};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    defaultState,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
