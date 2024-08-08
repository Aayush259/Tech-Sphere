
// Reducer function to add items in wishlist.
const add = (state, action) => {
    // Getting item index.
    const itemIndex = state.value.findIndex(item => item.id === action.payload.id);

    // If item is not present in wishlist, add it to wishlist.
    if (itemIndex === -1) {
        state.value = [...state.value, { ...action.payload }];
    };
};

// Reducer function to remove items from wishlist.
const remove = (state, action) => {
    const prevItems = [...state.value];

    state.value = prevItems.filter(item => item.id !== action.payload);
};

export { add, remove };
