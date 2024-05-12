import { useContext } from 'react';
import { ShopContext } from '../context';

export function Cart() {
    const { order, handleBasketShow } = useContext(ShopContext);

    const quantity = order.length;

    return (
        <div
            className='cart teal lighten-1 white-text'
            onClick={handleBasketShow}>
            <i className='material-icons'>shopping_cart</i>
            {quantity ? (
                <span className='cart-quantity'>{quantity}</span>
            ) : null}
        </div>
    );
}
