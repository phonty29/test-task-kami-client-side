//@ts-nocheck
import { useState, useEffect } from 'react';
import { useFormContext} from './FormProvider'

const PriceTable = () => {
	const {sendProduct, setSendProduct, fetchedProduct, setFetchedProduct} = useFormContext();

	const setPriceForCity = (event, currentIndex) => {	
		setSendProduct({...sendProduct, prices: sendProduct.prices.map((el, ind, arr) => {
			if (currentIndex == ind) 
				return {...el, price: event.target.value};
			return el;
		})})
	};

	return (
		<>
			<tr>
				<th>City</th>
				<th>Price</th>
			</tr>
			{sendProduct.prices.map((element, index, array) => (
                <tr key={index}>
                    <td>{element.city}</td>
                    <td><input key={fetchedProduct.prices[index]._id} defaultValue={fetchedProduct.prices[index].price} type="number" onChange={(e) => {setPriceForCity(e, index)}} /></td>
                </tr>
			))}						
		</>
	);
}

export default PriceTable;
