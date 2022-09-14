import axios from 'axios';
import { fetchItems } from './slice';
import { productItem } from '../types/types'; 
import { AppDispatch } from './store';

export const cartAPI = () => {
	const productAPI = '';
	return async function(dispatch: AppDispatch) {
		try { 
			let response = await axios.get(productAPI);
			let productItems: productItem[] = response.data.map((item: productItem, index: number, array: productItem[]) => ({...item, price: Number(item.price)}));
			dispatch(fetchItems(productItems));  		
		} catch (error) {
			console.error(error);
		}
	}
};