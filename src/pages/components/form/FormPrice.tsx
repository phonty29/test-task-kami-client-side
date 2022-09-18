import { FC, useState, useEffect, useRef } from 'react';
import PriceForm from './PriceForm';
import { useFormContext } from './FormProvider';

const FormPrice: FC = () => {
    const checkboxRef = useRef(null);
    const priceRef = useRef(null);
    const [samePrice, isTheSamePrice] = useState(false);
    const {product, setProduct} = useFormContext();
    useEffect(() => {
        if (samePrice) 
            setProduct({...product, prices: []});
        if (product.price != 'Differs') {
            priceRef.current.value = product.price;
        }
    }, [samePrice, product._id]);

    return (
        <div className="price">
            <div className="price-header">
                <div>
                    <input id="same-price" type="checkbox" ref={checkboxRef} onChange={() => {isTheSamePrice(prev => !prev)}}/>
                    <label htmlFor="same-price">The same price for all cities</label>
                </div>
                <div> 
                    <input type="number" ref={priceRef} onChange={() => {setProduct({...product, price: priceRef.current.value});}} />
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

