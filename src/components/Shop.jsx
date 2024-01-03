import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { ItemList } from './ItemsList';
import { Cart } from './Cart';

export function Shop() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.mainId === item.mainId
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return item;
                }
            });
            setOrder(newOrder);
        }
    };

    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setItems(data.shop);
                setLoading(false);
            });
    }, []);

    return (
        <main className='container content'>
            <Cart quantity={order.length} />
            {loading ? (
                <Preloader />
            ) : (
                <ItemList
                    items={items}
                    addToBasket={addToBasket}
                />
            )}
        </main>
    );
}
