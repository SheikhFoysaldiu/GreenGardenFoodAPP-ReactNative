export const incrementItem = (item) => ({
    type: 'INCREMENT_ITEM',
    payload: item,
});

export const decrementItem = (item) => ({
    type: 'DECREMENT_ITEM',
    payload: item,
});

export const setCartItems = (items) => ({
    type: 'SET_CART_ITEMS',
    payload: items,
});
