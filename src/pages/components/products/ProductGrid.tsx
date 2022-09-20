import { FC, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../rtk/hooks';
import ProductItem from './ProductItem';
import demo from '../demo.jpeg'
import { selectProductsState } from '../../../rtk/slice';
import { fetchProducts } from '../../../rtk/api';
import Loading from '../Loading';

const ProductGrid: FC = () => {
	const { currentPageItems } = useAppSelector(selectProductsState);
 
	return (
		(currentPageItems.length ?
		<section className={'section container'}>
			<h2 className={'sectionTitle'}>products</h2>
			<div className={'productsCenter'}>
				{currentPageItems.map((product, index, array) => <ProductItem key={product._id} productInfo={product}/>)}	
			</div>
		</section> : <Loading/>)		
	);
};

export default ProductGrid;