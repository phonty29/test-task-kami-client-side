import { FC } from 'react';

const FormStatus: FC = () => (
    <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Status of the product</span>
        </h4>
        <select className="form-select">
            <option selected>Active</option>
            <option>Inactive</option>
        </select>
    </div>
);

export default FormStatus;