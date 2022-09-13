import x from 'y';

const ProductGrid = () => {
	return (
		message ? <h2 className={}>{message}</h2>
		(products.length ?
		<section className={}>
			<h2 className={}>products</h2>
			<div className={}>
				{products.map((product, index, array) => <ProductItem key={product.id} props={product}/>)}
			</div>
		</section> : <Loading/>
		)		
	);
};