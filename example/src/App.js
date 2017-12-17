import React  from 'react';
import {Home} from './container/Home';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
// import { browseerHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/index';
import { rootSaga } from './sagas/sagas';


const defaultState = {};
const sagaMiddlware = createSagaMiddleware();
let store = createStore(reducers, defaultState, applyMiddleware(sagaMiddlware));

sagaMiddlware.run(rootSaga);

// export const history = syncHistoryWithStore(browseerHistory, store);

const App = () => (
<Provider store={store}>
    <Router>
    <div>
    <Route exact path='/' component={Home} />
    </div>
    </Router>
    </Provider>
);
export default App;
