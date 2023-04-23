const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_ITEM':
            {
                const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
                if (itemIndex !== -1) {
                    const cartItemsCopy = [...state.cartItems];
                    cartItemsCopy[itemIndex].quantity++;
                    return {
                        ...state,
                        cartItems: cartItemsCopy,
                    };
                } else {
                    const newItem = {
                        ...action.payload,
                        quantity: 1,
                    };
                    return {
                        ...state,
                        cartItems: [...state.cartItems, newItem],
                    };
                }
            }


        case 'DECREMENT_ITEM':
            {
                const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
                if (itemIndex !== -1) {
                    const cartItemsCopy = [...state.cartItems];
                    const itemQuantity = cartItemsCopy[itemIndex].quantity;
                    if (itemQuantity === 1) {
                        cartItemsCopy.splice(itemIndex, 1);
                    } else {
                        cartItemsCopy[itemIndex].quantity--;
                    }
                    return {
                        ...state,
                        cartItems: cartItemsCopy,
                    };
                } else {
                    return state;
                }
            }
        case 'SET_CART_ITEMS':
            {
                return {
                    ...state,
                    cartItems: action.payload,
                };
            }

        default:
            return state;


    }
};

export default cartReducer;