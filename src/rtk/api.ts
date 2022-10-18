//@ts-nocheck
import axios from 'axios';
import { fetchItems, addItem, updateItem, deleteItem, turnPage } from './slice';
import { productItem } from '../utils/types'; 
import { AppDispatch } from './store';

const api = "https://evening-oasis-57662.herokuapp.com";

export const fetchProducts = () => {
	return async function(dispatch: AppDispatch) {
		try { 
			let response = await axios.get(`${api}/products`);
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
			let response = await axios.get(`${api}/products/${id}`);
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
			product.images.forEach((image) => {
				formData.append('imageUrls', image);
			});
			formData.append('prices', JSON.stringify(product.prices));
			formData.append('price', product.price);
			const response = await axios.post(`${api}/products`, formData, {headers: {"Content-Type": "multipart/form-data"}});
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
			let formData = new FormData();
			formData.append('_id', product._id);
			formData.append('name', product.name);
			formData.append('status', product.status);
			formData.append('content', product.content);
			product.images.forEach((image) => {
				formData.append('imageUrls', image);
			});
			formData.append('prices', JSON.stringify(product.prices));
			formData.append('price', product.price);
			const response = await axios.put(`${api}/products/${product._id}`, formData, {headers: {"Content-Type": "multipart/form-data"}});
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
			const response = await axios.delete(`${api}/products/${id}`);
			let productItem: productItem = response.data;
			dispatch(deleteItem(productItem._id));	
			dispatch(fetchProducts());	
		} catch (error) {
			console.error(error);
		}
	}
};
