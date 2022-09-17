// @ts-nocheck
import { FC, useState, useEffect, useRef } from 'react';
import { useFormContext } from './FormProvider';

const FormPrice: FC = () => {
    const checkboxRef = useRef(null);
    const tableRef = useRef(null);
    const priceRef = useRef(null);
    const {product, setProduct} = useFormContext();

    const setPrice = () => {
        const content = tableRef.current;
        if(checkboxRef.current.checked) {
            content.classList.add('hidden');
            setProduct({...product, price: priceRef.current.value})
        } else {
            content.classList.remove('hidden'); 
            const prices: {city: string, price: number} = [];
            document.querySelectorAll('.cityPricePair').forEach((pair, index, array) => {
                prices.push({city: pair.querySelector('.city').textContent, price: pair.querySelector('.priceForCity').value});
            });  
            setProduct({...product, prices});                  
        }
    };

    const fillPrices = () => {
        document.querySelectorAll('.priceForCity').forEach((priceInput, index, array) => {
            priceInput.value = priceRef.current.value;
        });
    };

    return (
        <div className="price">
            <div className="price-header">
                <div>
                    <input id="same-price" type="checkbox" ref={checkboxRef} onChange={setPrice}/>
                    <label htmlFor="same-price">The same price for all cities</label>
                </div>
                <div> 
                    <input type="number" placeholder="5000" ref={priceRef} onChange={fillPrices}/>
                </div>
            </div>
            <table className="table" ref={tableRef}>
                <tbody>
                    <tr>
                        <th>City</th>
                        <th>Price</th>
                    </tr>
                    <tr className="cityPricePair">
                        <td><span className="city">Almaty</span></td>
                        <td><input type="number" className={"priceForCity"} /></td>
                    </tr>
                    <tr className="cityPricePair">
                        <td><span className="city">Astana</span></td>
                        <td><input type="number" className={"priceForCity"} /></td>
                    </tr> 
                    <tr className="cityPricePair">
                        <td><span className="city">Shymkent</span></td>
                        <td><input type="number" className={"priceForCity"} /></td>
                    </tr>   
                </tbody>                                              
            </table>
        </div>
    );
};

export default FormPrice;

