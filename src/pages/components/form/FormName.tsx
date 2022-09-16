import { FC } from 'react';

const FormName: FC = () => (
    <div className="col-sm-6 w-100">
        <label htmlFor="name" className="form-label">Name of the product</label>
        <input type="text" className="form-control" id="name" placeholder="" defaultValue="" />
        <div className="invalid-feedback">
            Valid first name is required.
        </div>
    </div>
);

export default FormName;
