import Loading from './Loading';
import ProductItem from './ProductItem';
import demo from '../demo.jpeg'
import { FC, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../rtk/hooks';
import { selectProductsState } from '../../../rtk/slice';
import { fetchProducts } from '../../../rtk/api';

const ProductGrid: FC = () => {
	const dispatch = useAppDispatch();
	const { currentPageItems } = useAppSelector(selectProductsState);
	useEffect(() => {
		dispatch(fetchProducts());
	}, []);
	
	return (
		(currentPageItems.length ?
		<section className={'section'}>
			<h2 className={'sectionTitle'}>products</h2>
			<div className={'productsCenter'}>
				{currentPageItems.map((product, index, array) => <ProductItem key={product._id} productInfo={product}/>)}	
			</div>
		</section> : <Loading/>
		)		
	);
};

export default ProductGrid;