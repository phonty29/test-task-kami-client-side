import { FC, useState } from 'react';
import PriceForm from './PriceForm';
import { useFormContext } from './FormProvider';

const FormPrice: FC = () => {
    const [samePrice, isTheSamePrice] = useState(false);
    const {sendProduct, setSendProduct, fetchedProduct, setFetchedProduct} = useFormContext();

    return (
        <div className="price">
            <div className="price-header">
                <div>
                    <input id="same-price" type="checkbox" onChange={(e) => {isTheSamePrice(e.target.checked)}}/>
                    <label htmlFor="same-price">The same price for all cities</label>
                </div>
                <div> 
                    <input key={fetchedProduct._id} className="form-control" defaultValue={fetchedProduct.price} type="number" onChange={(e) => {setSendProduct({...sendProduct, price: e.target.value});}} />
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

