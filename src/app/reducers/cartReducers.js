
// Reducer function to add item in cart.
const add = (state, action) => {
    // Getting item index, to check whether the item is already in the cart or not.
    const itemIndex = state.value.findIndex(item => item.id === action.payload.id);

    // If the item is already in cart, update its count, otherwise add the item in cart.
    if (itemIndex === -1) {
        state.value = [...state.value, { ...action.payload, count: 1 }];
    } else {
        const updatedItems = [...state.value];
        updatedItems[itemIndex]['count'] += 1;
        state.value = updatedItems;
    };
};

// Reducer function to remove item from cart.
const remove = (state, action) => {
    const prevItems = [...state.value];

    state.value = prevItems.filter(item => item.id !== action.payload);
};

// Reducer function to increment item count in cart.
const increment = (state, action) => {
    // Getting item index.
    const itemIndex = state.value.findIndex(item => item.id === action.payload);

    // If item is present in cart, increment its count.
    if (itemIndex !== -1) {
        const updatedItems = [...state.value];
        updatedItems[itemIndex]['count'] += 1;
        state.value = updatedItems;
    };
};

// Reducer function to decrement item count in cart.
const decrement = (state, action) => {
    // Getting item index.
    const itemIndex = state.value.findIndex(item => item.id === action.payload);
    let updatedItems = [...state.value];

    // If item is present in cart, decrement its count and filter out those items whose count is zero.
    if (itemIndex !== -1) {
        updatedItems[itemIndex]['count'] -= 1;
        updatedItems = updatedItems.filter(item => item.count > 0);
        state.value = updatedItems;
    };
};

export { add, remove, increment, decrement };
