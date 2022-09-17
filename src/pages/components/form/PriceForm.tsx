import { useState, useRef, useEffect } from 'react';
import { useFormContext} from './FormProvider'

const PriceTable = () => {
	const [priceList, setPriceList] = useState([
		{city: "Astana", ref: useRef(null), price: 0}, 
		{city: "Almaty", ref: useRef(null), price: 0}, 
		{city: "Shymkent", ref: useRef(null), price: 0}
	]);
    useEffect(() => {
        setProduct({...product, prices: priceList.map(el => { return {city: el.city, price: el.price}}), price: "Differ"});
    }, [priceList]);
	const {product, setProduct} = useFormContext();

	const setPriceForCity = () => {
		setPriceList( priceList.map( (el, ind, arr) => ({...el, price: el.ref.current.value}) ) );	
	};

	return (
		<>
			<tr>
				<th>City</th>
				<th>Price</th>
			</tr>
			{priceList.map((element, index, array) => (
                <tr key={index}>
                    <td>{element.city}</td>
                    <td><input type="number" ref={element.ref} onChange={setPriceForCity} /></td>
                </tr>
			))}						
		</>
	);
}

export default PriceTable;
