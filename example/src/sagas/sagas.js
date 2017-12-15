

import { select, takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
import axios from 'axios';
import {startSubmit, stopSubmit, reset} from 'redux-form';
import actionTypes from '../actions/actionTypes';


function callSubmit(data){
    return fetch('/local/fafa', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).catch(error => error);
}

function* submitToServer(action){
    yield put(startSubmit('contact'));
    const result = yield call(callSubmit, action.data);
    if(result.error){
      yield   put({type: "Sucess"});
    } else {
       yield put({type: "Sucess"});
    }
    yield put(stopSubmit('contact'));
}

function* submitSaga(){
    yield takeLatest('REQUEST', submitToServer);
}


export function* rootSaga(){
    yield [
        fork(submitSaga)
    ]
}