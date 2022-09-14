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
						<h3>{"Text 1"}</h3>
						<h4>{"Text 2"}</h4>
						<p>{"Text 3"}</p>
						<Link to={``} className={'.btn .btnPrimary .btnDetails'}>details</Link>
					</div>
				</article>
							
			</div>
		</section> : <Loading/>
		)		
	);
};

export default ProductGrid;