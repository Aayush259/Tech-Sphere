
const localStorageMiddleware = type => store => next => action => {
    // Calling next reducers.
    const result = next(action);

    if (action.type.startsWith(type)) {
        // Getting current state from store.
        const state = store.getState();

        // Updating local storage.
        localStorage.setItem(type, JSON.stringify(state[type].value));
    };

    return result;
};

const cartLocalStorageMiddleware = () => localStorageMiddleware('cart');

const wishlistLocalStorageMiddleware = () => localStorageMiddleware('wishlist');

export { cartLocalStorageMiddleware, wishlistLocalStorageMiddleware };
