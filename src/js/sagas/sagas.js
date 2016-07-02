import {put, call, take, takeLatest} from 'redux-saga/effects'
import * as api from '../api'

function *fetchToDos () {
	try {
	const todos = yield call(fetch(api.fetchToDos));
		yield put ({type: "REQUEST_TODOS_SUCCESS"})
		} catch(e) {
	yield put ({type: "REQUEST_TODOS_FAILURE", error: e.error});
		}
	}

function *watchFetchTodos() {
	yield* takeLatest('REQUEST_TODOS', fetchToDos)
}

export default function *rootSaga() {
  yield[ watchRequestTodos ]
}
