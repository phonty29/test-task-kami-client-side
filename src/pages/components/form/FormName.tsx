import { FC } from 'react';
import { useFormContext } from './FormProvider';

const FormName: FC = () => {
    const {sendProduct, setSendProduct, fetchedProduct, setFetchedProduct} = useFormContext();
    
    return (
        <div className="col-sm-6 w-100">
            <label htmlFor="name" className="form-label">Name of the product</label>
            <input defaultValue={fetchedProduct.name} type="text" className="form-control" id="name" placeholder="" onChange={(e) => {setSendProduct({...sendProduct, name: e.target.value})}}/>
        </div>        
    )
};

export default FormName;
