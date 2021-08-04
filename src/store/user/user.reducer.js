import { initialState } from "../initialState";
import {
    LOGIN_LOADED,
    LOGIN_LOADING,
    LOGIN_FAIL
} from './user.types';

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_LOADED:
            console.log(actino.payload);
            return {
                ...state,
                loginData: [],
                loginLoading: false,
                loginLoaded: true,
                loginFail: false,
            }
        case LOGIN_LOADING:
            return {
                ...state,
                loginLoading: true,
                loginLoaded: false,
                loginFail: false,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loginLoading: false,
                loginLoaded: false,
                loginFail: true,
            }
        default: {
            return state
        }
    }
}