import { initialState } from "../initialState";
import {
    SET_NAVIGATION_REF
} from './navigation.types';

export const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAVIGATION_REF:
            return {
                ...state,
                navigationRef: action.payload
            }
        default: {
            return state
        }
    }
}