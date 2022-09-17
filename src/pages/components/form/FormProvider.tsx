import {createContext, useContext, useState, useEffect} from 'react';

const FormContext = createContext(null);


const FormProvider = ({children}: any) => {
	const [product, setProduct] = useState({status: true});
    useEffect(() => { 
        console.log(product);
    }, [product]);

	return (
		<FormContext.Provider value={{product, setProduct}}>
			{children}
		</FormContext.Provider>
	);
};

export default FormProvider;

export const useFormContext = () => {
	return useContext(FormContext);
};