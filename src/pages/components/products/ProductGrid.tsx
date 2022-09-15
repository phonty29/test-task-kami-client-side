import Loading from './Loading';
// import ProductItem from './ProductItem';
import demo from '../demo.jpeg'
import { FC } from 'react';
import {Link} from 'react-router-dom';

const ProductGrid: FC = () => {
	const message = '';
	const products = [{
		id: 1,
	}];
	return (
		message ? <h2 className={'sectionTitle'}>{}</h2> : 
		(products.length ?
		<section className={'section'}>
			<h2 className={'sectionTitle'}>products</h2>
			<div className={'productsCenter'}>
				{/* {products.map((product, index, array) => <ProductItem key={product.id} productInfo={product}/>)} */}
				<article className={'product'}>
					<div className={'imgContainer'}>
						<img src={demo} alt={"product image"}/>
					</div>
					<div className={'productFooter'}>
						<h3 className={"name"}><span>Name: </span>{"Product 1"}</h3>
						<h4 className={"price"}><span>Price: </span>{"7000"}</h4>
						<p className={"status"}><span>Status: </span>{"Active"}</p>
						<Link to={``} className={'btn btnPrimary btnDetails'}>delete</Link>
					</div>
				</article>	
			</div>
		</section> : <Loading/>
		)		
	);
};

export default ProductGrid;