import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

const reducers =  combineReducers({
    routing: routerReducer,
    form:  formReducer
});

export default reducers;