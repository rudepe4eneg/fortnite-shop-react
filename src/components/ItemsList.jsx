import { useContext } from 'react';
import { ShopContext } from '../context';
import { Item } from './Item';

export function ItemList() {
    const { items } = useContext(ShopContext);

    if (!items.length) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className='items'>
            {items.map((item, mainId) => (
                <Item
                    key={mainId}
                    {...item}
                />
            ))}
        </div>
    );
}
