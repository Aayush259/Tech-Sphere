import { useSelector } from 'react-redux';

const useProducts = () => {
    const { value: products, status } = useSelector(state => state.product);

    return { products, status };
};

const useCartItems = () => useSelector(state => state.cart.value);

export { useProducts, useCartItems };
