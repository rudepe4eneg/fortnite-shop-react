import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { ItemList } from './ItemsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

export function Shop() {
    const {
        loading,
        order = [],
        isBasketShow,
        alertName,
        setItems,
    } = useContext(ShopContext);

    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setItems(data.shop);
            });
        // eslint-disable-next-line
    }, []);

    return (
        <main className='container content'>
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <ItemList />}
            {isBasketShow && <BasketList />}
            {alertName && <Alert />}
        </main>
    );
}
