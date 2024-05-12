import { useContext } from 'react';
import { ShopContext } from '../context';

export function Item(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price: { regularPrice },
        displayAssets: [{ full_background }],
    } = props;

    const { addToBasket } = useContext(ShopContext);

    return (
        <div
            className='card'
            id={mainId}>
            <div className='card-image'>
                <img
                    src={full_background}
                    alt={displayDescription}
                />
                <span className='card-title'>{displayName}</span>
            </div>
            <div className='card-content'>
                <p>{displayDescription}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addToBasket({
                            mainId,
                            displayName,
                            regularPrice,
                        })
                    }>
                    Купить
                </button>
                <span className='right'>{regularPrice}</span>
            </div>
        </div>
    );
}
