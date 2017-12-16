

import { takeLatest, call, fork, put } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';


function submitToServer(data){
   return fetch('http://localhost:3000/comments', {
       method: 'POST',
       headers: {
           'Content-type' : 'application/json'
       },
       body: JSON.stringify(data)
   }).then( res => res.json()).catch(error => console.error(error));
}

function* callSubmit(action){
    yield put(startSubmit('contact'));
    let errors = {};
    const result = yield call(submitToServer, action.data);
    if(result.errors){
        yield put({ type: 'REQUEST_FAILED', errors: result.errors});
    } else {
       yield put({ type: 'REQUEST_SUCCESSFULL'});
    }
    yield put(stopSubmit('contact', errors));
}

function* submitSaga(){
   yield takeLatest('REQUEST_SUBMIT', callSubmit);
}

export function* rootSaga(){
    yield [
        fork(submitSaga)
    ]
}

