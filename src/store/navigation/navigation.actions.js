import {
    SET_NAVIGATION_REF
} from './navigation.types';

export function setNavigationRef(data) {
    return {
        type: SET_NAVIGATION_REF,
        payload: data
    }
}