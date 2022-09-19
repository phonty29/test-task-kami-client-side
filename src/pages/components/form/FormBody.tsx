import { FC, useState, useEffect } from 'react';
import FormDescription from './FormDescription';
import FormMedia from './FormMedia';
import FormName from './FormName';
import FormPrice from './FormPrice';
import FormStatus from './FormStatus';
import FormProvider, { useFormContext } from './FormProvider';

const FormBody: FC = () => {
	return (
		<FormProvider className={"row g-5 mt-3"}>
			<FormStatus/>
			<div className="col-md-7 col-lg-8">
				<h4 className="mb-3">Add product</h4>
				<form>
					<div className="row g-3">
						<FormName/>
						<FormDescription/>
					</div>
					<hr className="my-4"/>
					<FormMedia/>
					<hr className="my-4"/>
					<FormPrice/>
					<hr className="my-4"/>
				</form>
			</div>
		</FormProvider>	
	);
};

export default FormBody; 