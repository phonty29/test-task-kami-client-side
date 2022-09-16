import {Link, useParams} from 'react-router-dom';
import FormBody from './components/form/FormBody';
import '../styles/ProductForm.css'

const ProductForm = () => {
	const {id} = useParams();

	return (
		<section className={"section productSection container "}>
			<Link to='products' className={"btn btnPrimary"}>back home</Link>
			<FormBody/>
		</section>
	);
}

export default ProductForm;