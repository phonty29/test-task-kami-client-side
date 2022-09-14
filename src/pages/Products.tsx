import { FC } from 'react';
import Search from './components/Search';
import ProductGrid from './components/ProductGrid';

const Products: FC = () => (
	<main>
		<Search/>
		<ProductGrid/>
	</main>	
);

export default Products;