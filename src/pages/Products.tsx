import { FC, useEffect } from 'react';
import Search from './components/products/Search';
import ProductGrid from './components/products/ProductGrid';
import MyPagination from './components/products/MyPagination';
import '../styles/Products.css';
import Navbar from './components/Navbar';
import { useAppDispatch, useAppSelector } from '../rtk/hooks';
import { selectProductsState } from '../rtk/slice';
import { fetchProducts } from '../rtk/api';

const Products: FC = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	return (
		<main>
			<Navbar/>
			<Search/>
			<ProductGrid/>
			<MyPagination/>
		</main>
	);	
};

export default Products;