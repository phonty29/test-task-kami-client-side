import { FC } from 'react';
import {Link} from 'react-router-dom';
import { productItem } from '../../../types/types';

interface ProductItemProps {
	productInfo: productItem;
};

const ProductItem: FC<ProductItemProps> = ({productInfo}) => {
	const deleteItem = () => {
		console.log(productInfo._id)
	};

	return (
		<Link to={`/products/edit/${productInfo._id}`} className={'product'} id={productInfo._id as string}>
			<div className={'imgContainer'}>
				<img src={productInfo.images[0]} alt={"product image"}/>
			</div>
			<div className={'productFooter'}>
				<h3 className={"name"}><span>Name: </span>{productInfo.name}</h3>
				<h4 className={"price"}><span>Price: </span>{productInfo.price}</h4>
				<p className={"status"}><span>Status: </span>{productInfo.status}</p>
				<button className={'btn btnPrimary btnDetails'} onClick={deleteItem}>delete</button>
			</div>
		</Link>
	);
}

export default ProductItem;














