import { FC, useState, useEffect, useRef } from 'react';
import PriceForm from './PriceForm';
import { useFormContext } from './FormProvider';

const FormPrice: FC = () => {
    const checkboxRef = useRef(null);
    const priceRef = useRef(null);
    const [price, setPrice] = useState(0);
    const [samePrice, isTheSamePrice] = useState(false);
    useEffect(() => {
        if (samePrice) 
            setProduct({...product, prices: [], price: price})
    }, [samePrice, price]);
    const {product, setProduct} = useFormContext();

    return (
        <div className="price">
            <div className="price-header">
                <div>
                    <input id="same-price" type="checkbox" ref={checkboxRef} onChange={() => {isTheSamePrice(prev => !prev)}}/>
                    <label htmlFor="same-price">The same price for all cities</label>
                </div>
                <div> 
                    <input type="number" placeholder="5000" ref={priceRef} onChange={() => {setPrice(priceRef.current.value);}} />
                </div>
            </div>
            <table className="table">
                <tbody>
                    {!samePrice && <PriceForm/> }                                             
                </tbody>
            </table>
        </div>
    );
};

export default FormPrice;

