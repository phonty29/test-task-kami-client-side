import { FC, useRef, useEffect } from 'react';
import { useFormContext } from './FormProvider';

const FormName: FC = () => {
    const nameRef = useRef(null);
    const {product, setProduct} = useFormContext();

    const setName = () => {
        setProduct({...product, name: nameRef.current.value});
    };
    
    return (
        <div className="col-sm-6 w-100">
            <label htmlFor="name" className="form-label">Name of the product</label>
            <input defaultValue={product.name} ref={nameRef} type="text" className="form-control" id="name" placeholder="" onChange={setName}/>
        </div>        
    )
};

export default FormName;
