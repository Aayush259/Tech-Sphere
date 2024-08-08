import { useSelector } from 'react-redux';

const useProducts = () => {
    const { value: products, status } = useSelector(state => state.product);

    return { products, status };
};

const useCartItems = () => useSelector(state => state.cart.value);

const useWishlistItems = () => useSelector(state => state.wishlist.value);

export { useProducts, useCartItems, useWishlistItems };
