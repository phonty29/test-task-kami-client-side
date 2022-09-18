import axios from 'axios';
import { fetchItems, addItem, updateItem, deleteItem } from './slice';
import { productItem } from '../types/types'; 
import { AppDispatch } from './store';

export const fetchProducts = () => {
	return async function(dispatch: AppDispatch) {
		try { 
			let response = await axios.get('products');
			let productItems: productItem[] = response.data;
			dispatch(fetchItems(productItems));  		
		} catch (error) {
			console.error(error);
		}
	}
};

export const getProduct = (id: number | string) => {
	return async function(dispatch: AppDispatch) {
		try { 
			let response = await axios.get(`product/${id}`);
			let productItem: productItem = response.data;	
			return productItem;
		} catch (error) {
			console.error(error);
		}
	}
};

export const postProduct = (product: productItem) => {
	return async function(dispatch: AppDispatch) {
		try { 
            const response = await axios({
                method: 'POST',
                url: `/products`,
                data: {
                    ...product
                }
            });
			let productItem: productItem = response.data;
			dispatch(addItem(productItem));  		
		} catch (error) {
			console.error(error);
		}
	}
};

export const updateProduct = (product: productItem) => {
	return async function(dispatch: AppDispatch) {
		try { 
            const response = await axios({
                method: 'PUT',
                url: `/products/${product._id}`,
                data: {
                    ...product
                }
            });
			let productItem: productItem = response.data;
			dispatch(updateItem(productItem));  		
		} catch (error) {
			console.error(error);
		}
	}
};

export const deleteProduct = (id: string) => {
	return async function(dispatch: AppDispatch) {
		try { 
            const response = await axios({ method: 'DELETE', url: `/products/${id}`, });
			let productItem: productItem = response.data;
			dispatch(deleteItem(productItem._id));	
		} catch (error) {
			console.error(error);
		}
	}
};
