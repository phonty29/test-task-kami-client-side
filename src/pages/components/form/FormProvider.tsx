// @ts-nocheck
import axios from 'axios';
import {createContext, useContext, useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { getProduct, postProduct, updateProduct } from '../../../rtk/api';
import { useAppDispatch } from '../../../rtk/hooks';

const FormContext = createContext(null);


const FormProvider = ({children}: any) => {
	const [product, setProduct] = useState({status: true, name: "", content: '', images: [], prices: [], price: "Differs"});
	const dispatch = useAppDispatch();
	const { id } = useParams();
    useEffect( () => { 
        if (id) {
			fetchData(id);
		}
		else {
		}
    }, []);

	const fetchData = async (id: number | string) => {
		try {
			const product = await getProduct(id);
			setProduct(product);
		} catch (error) {
			console.log(error);
		}
	};

	const sendData = () => {
		if (id) {
			dispatch(updateProduct(product));
		} else {
			dispatch(postProduct(product));
		}
	};

	return (
		<FormContext.Provider value={{product, setProduct}}>
			{children}
			<button className="btn btn-primary btn-lg mt-5" type="submit" onClick={sendData}>Add product</button>
		</FormContext.Provider>
	);
};

export default FormProvider;

export const useFormContext = () => {
	return useContext(FormContext);
};