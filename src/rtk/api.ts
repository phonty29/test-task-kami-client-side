import axios from 'axios';
import { fetchProducts } from './slice';
import { productItem } from '../types/types'; 
import { AppDispatch } from './store';

export const cartAPI = () => {
	const productDB = '';
	return async function(dispatch: AppDispatch) {
		try { 
			let response = await axios.get(productDB);
			let productItems: productItem[] = response.data.map((item: productItem, index: number, array: productItem[]) => ({...item, price: Number(item.price)}));
			dispatch(fetchProducts(productItems));  		
		} catch (error) {
			console.error(error);
		}
	}
};