import {Link, useParams} from 'react-router-dom';

const ProductForm = () => {
	const {id} = useParams();

	return (
			// <section className={}>
			// 	<Link to='products' className={}>back home</Link>
			// 	<h2 className={}>{}</h2> //name
			// 	<div className={}>wysiwyg</div> //wysiwyg
			// 	<div className={}>
			// 		<img/>
			// 		<input/>
			// 	</div> //media
			// 	<div className={}>
			// 		<input/>
			// 		<input/>
			// 		{ if checked && 
			// 		<div>
						
			// 		</div>
			// 		}
			// 	</div> //pricelist
			// </section>
		<h1>This is single page</h1>
	);
}

export default ProductForm;