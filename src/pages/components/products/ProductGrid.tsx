import Loading from './Loading';
import ProductItem from './ProductItem';
import demo from '../demo.jpeg'
import { FC } from 'react';
import {Link} from 'react-router-dom';
import { useAppSelector } from '../../../rtk/hooks';
import { selectProductsState } from '../../../rtk/slice';

const ProductGrid: FC = () => {
	const { items } = useAppSelector(selectProductsState);

	return (
		(items.length ?
		<section className={'section'}>
			<h2 className={'sectionTitle'}>products</h2>
			<div className={'productsCenter'}>
				{items.map((product, index, array) => <ProductItem key={product._id} productInfo={product}/>)}	
			</div>
		</section> : <Loading/>
		)		
	);
};

export default ProductGrid;