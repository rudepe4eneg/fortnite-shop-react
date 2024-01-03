import { GoodsItem } from './GoodsItem';

export function ItemList(props) {
    const { items = [], addToBasket = Function.prototype } = props;

    if (!items.length) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className='items'>
            {items.map((item) => (
                <GoodsItem
                    key={item.mainId}
                    {...item}
                    addToBasket={addToBasket}
                />
            ))}
        </div>
    );
}
