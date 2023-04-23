// thunks.js

import { decrementItem, incrementItem } from "../action/Cart.action";


export const incrementAsync = (item) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(incrementItem(item));
        }, 1000);
    };
};

export const decrementAsync = (item) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(decrementItem(item));
        }, 1000);
    };
};
