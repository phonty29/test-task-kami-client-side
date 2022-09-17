import axios from 'axios';
import { fetchProduct, clarify } from './slice';
import { productItem } from '../types/types'; 
import { AppDispatch } from './store';

export const fetchFields = () => {
	return async function(dispatch: AppDispatch) {
		try { 
			let response = await axios.get('products/:id');
			let productItem: productItem = response.data;
			dispatch(fetchProduct(productItem));  		
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
			dispatch(clarify());  		
		} catch (error) {
			console.error(error);
		}
	}
};

export const updateProduct = (id: string, product: productItem) => {
	return async function(dispatch: AppDispatch) {
		try { 
            const response = await axios({
                method: 'PUT',
                url: `/products/${id}`,
                data: {
                    ...product
                }
            });
			let productItem: productItem = response.data;
			dispatch(fetchProduct(productItem));  		
		} catch (error) {
			console.error(error);
		}
	}
};

export const deleteProduct = (id: string) => {
	return async function(dispatch: AppDispatch) {
		try { 
            const response = await axios({ method: 'DELETE', url: `/products/${id}`, });	
		} catch (error) {
			console.error(error);
		}
	}
};
