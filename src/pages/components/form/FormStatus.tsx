import { FC, useRef, useEffect, useState } from 'react';
import { useFormContext } from './FormProvider';

const FormStatus: FC = () => {
    const {sendProduct, setSendProduct, fetchedProduct, setFetchedProduct} = useFormContext();

    return (
        <div className="col-md-5 col-lg-4 order-md-last mt-3 mb-3">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Status of the product</span>
            </h4>
            <select className="form-select" onChange={() => {setSendProduct({...sendProduct, status: !sendProduct.status})}}>
                {fetchedProduct.status ? (
                <>
                    <option selected>Active</option>
                    <option>Inactive</option>
                </>
                ) : (
                <>
                    <option>Active</option>
                    <option selected>Inactive</option>                
                </>
                )}
            </select>
        </div>
    );
};

export default FormStatus;