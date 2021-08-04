import {
    LOGIN_LOADED,
    LOGIN_LOADING,
    LOGIN_FAIL
} from './user.types';

export function loginLoadedAction(data) {
    return {
        type: LOGIN_LOADED,
        payload: data
    }
}

export function loginLoadingAction(data) {
    return {
        type: LOGIN_LOADING,
        payload: data
    }
}

export function loginFailAction(data) {
    return {
        type: LOGIN_FAIL,
        payload: data
    }
}