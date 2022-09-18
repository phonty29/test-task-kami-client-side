//@ts-nocheck
import axios from 'axios';
import { fetchItems, addItem, updateItem, deleteItem, turnPage } from './slice';
import { productItem } from '../types/types'; 
import { AppDispatch } from './store';

export const fetchProducts = () => {
	return async function(dispatch: AppDispatch) {
		try { 
			let response = await axios.get('http://localhost:1337/products');
			let productItems: productItem[] = response.data;
			dispatch(fetchItems(productItems));  		
			dispatch(turnPage(1));  		
		} catch (error) {
			console.error(error);
		}
	}
};

export const getProduct = async (id: number | string) => {
		try { 
			let response = await axios.get(`http://localhost:1337/products/${id}`);
			let productItem: productItem = response.data;
			return productItem;
		} catch (error) {
			console.error(error);
		}
};

export const postProduct = (product: productItem) => {
	return async function(dispatch: AppDispatch) {
		try { 
			let formData = new FormData();
			formData.append('name', product.name);
			formData.append('status', product.status);
			formData.append('content', product.content);
			formData.append('images', product.images);
			formData.append('prices', JSON.stringify(product.prices));
			formData.append('price', product.price);
			const response = await axios.post(`http://localhost:1337/products`, formData, {headers: {"Content-Type": "multipart/form-data"}});
			let productItem: productItem = response.data;
			dispatch(addItem(productItem));  		
		} catch (error) {
			console.error(error)
		}
	}
};

export const updateProduct = (product: productItem) => {
	return async function(dispatch: AppDispatch) {
		try { 
            const response = await axios({
                method: 'PUT',
                url: `http://localhost:1337/products/${product._id}`,
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
            const response = await axios({ method: 'DELETE', url: `http://localhost:1337/products/${id}`});
			let productItem: productItem = response.data;
			dispatch(deleteItem(productItem._id));	
		} catch (error) {
			console.error(error);
		}
	}
};
