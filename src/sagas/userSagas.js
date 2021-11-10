import { takeLatest, put, call} from "redux-saga/effects";
import {loadUserSuccess, loadUserFail } from "../actions/userActions";
import { loadUserApi } from "../apis/userApi";


export function* onLoadUserStartAsync(){
    try{
        const response = yield call (loadUserApi);
        yield put (loadUserSuccess(response.data));
    } catch(error) {
        yield put(loadUserFail(error));
    }
}

export function* onLoadUser(){
    yield takeLatest("LOAD_USER", onLoadUserStartAsync)
}