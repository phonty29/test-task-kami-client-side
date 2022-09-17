import { FC, useRef } from 'react';
import { useFormContext } from './FormProvider';

const FormStatus: FC = () => {
    const statusRef = useRef(null);
    const {product, setProduct} = useFormContext();

    const setStatus = () => { 
        setProduct({...product, status: statusRef.current.selected});
    };

    return (
        <div className="col-md-5 col-lg-4 order-md-last mt-3 mb-3">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Status of the product</span>
            </h4>
            <select className="form-select" onChange={setStatus}>
                <option ref={statusRef}>Active</option>
                <option>Inactive</option>
            </select>
        </div>
    );
};

export default FormStatus;