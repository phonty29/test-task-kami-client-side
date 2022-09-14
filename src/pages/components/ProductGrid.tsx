import Loading from './Loading';
import ProductItem from './ProductItem';

const ProductGrid = () => {
	const message = 'sdfdsf';
	const products = [{
		id: 1,
	}];
	return (
		message ? <h2 className={'sectionTitle'}>{}</h2> : 
		(products.length ?
		<section className={'section'}>
			<h2 className={'sectionTitle'}>products</h2>
			<div className={'productsCenter'}>
				{products.map((product, index, array) => <ProductItem key={product.id} productInfo={product}/>)}
			</div>
		</section> : <Loading/>
		)		
	);
};

export default ProductGrid;