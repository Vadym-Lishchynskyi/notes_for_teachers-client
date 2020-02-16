import {SET_USER,SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_ERRORS, CLEAR_ERRORS, LOADING_UI} from '../types';

const initialState = {
    authenticated: false,
    loading: false,
    users: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return initialState;
        case SET_USER:
            return {
                authenticated: true,
                loading: false,
                ...action.payload
            };
        default:
            return state;
    }
}