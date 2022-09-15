import { FC } from 'react';
import Search from './components/products/Search';
import ProductGrid from './components/products/ProductGrid';
import MyPagination from './components/products/MyPagination';
import '../styles/Products.css';

const Products: FC = () => (
	<main className={"container"}>
		<Search/>
		<ProductGrid/>
		<MyPagination/>
	</main>	
);

export default Products;