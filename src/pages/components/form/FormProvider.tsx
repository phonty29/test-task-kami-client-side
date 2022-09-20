// @ts-nocheck
import axios from 'axios';
import {createContext, useContext, useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { getProduct, postProduct, updateProduct } from '../../../rtk/api';
import { useAppDispatch } from '../../../rtk/hooks';
import { defaultProduct } from '../../../utils/types';

const FormContext = createContext(null);

const FormProvider = ({children}: any) => {
	const [sendProduct, setSendProduct] = useState(defaultProduct);
	const [fetchedProduct, setFetchedProduct] = useState(defaultProduct);
	const dispatch = useAppDispatch();
	const { id } = useParams();
    useEffect( () => { 
        if (id) 
			fetchData(id);
    }, []);

	const fetchData = async (id: number | string) => {
		try {
			const product = await getProduct(id);
			setSendProduct({...product, images: [], imageUrls: []});
			setFetchedProduct(product);
		} catch (error) {
			console.log(error);
		}
	};
	const sendData = () => {
		if (id) {
			dispatch(updateProduct(sendProduct));
			alert("Product was edited")
		} else {
			dispatch(postProduct(sendProduct));
			alert("Product was post")
		}
	};

	return (
		<FormContext.Provider value={{sendProduct, setSendProduct, fetchedProduct, setFetchedProduct}}>
			{children}
			<button className="btn btn-primary btn-lg mt-5" type="submit" onClick={sendData}>Add product</button>
		</FormContext.Provider>
	);
};

export default FormProvider;

export const useFormContext = () => {
	return useContext(FormContext);
};