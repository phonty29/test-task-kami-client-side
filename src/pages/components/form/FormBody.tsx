import { FC } from 'react';
import FormDescription from './FormDescription';
import FormMedia from './FormMedia';
import FormName from './FormName';
import FormPrice from './FormPrice';
import FormStatus from './FormStatus';

const FormBody: FC = () => (
	<div className={"row g-5 mt-3"}>
		<FormStatus/>
		<div className="col-md-7 col-lg-8">
			<h4 className="mb-3">Add product</h4>
			<form className="needs-validation was-validated">
				<div className="row g-3">
                    <FormName/>
                    <FormDescription/>
				</div>
                <hr className="my-4"/>
                <FormMedia/>
                <hr className="my-4"/>
                <FormPrice/>
                <hr className="my-4"/>
                <button className="w-100 btn btn-primary btn-lg" type="submit">Add product</button>
			</form>
		</div>
	</div>	
);

export default FormBody; 