import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
    const { mainId, displayName, regularPrice, quantity } = props;

    const { removeFromBasket, incQuantity, decQuantity } =
        useContext(ShopContext);
    if (quantity === 0) {
        return <li className='collection-item'>Корзина пуста</li>;
    } else {
        return (
            <li className='collection-item'>
                {displayName}{' '}
                <i
                    className='material-icons basket-quantity'
                    onClick={() => decQuantity(mainId)}>
                    remove
                </i>{' '}
                x{quantity}{' '}
                <i
                    className='material-icons basket-quantity'
                    onClick={() => incQuantity(mainId)}>
                    add
                </i>{' '}
                = {regularPrice * quantity}
                <span
                    className='secondary-content'
                    onClick={() => removeFromBasket(mainId)}>
                    <i className='material-icons basket-delete'>close</i>
                </span>
            </li>
        );
    }
}

export { BasketItem };
