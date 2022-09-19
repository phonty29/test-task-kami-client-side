import { FC } from 'react';
import {Link} from 'react-router-dom';
import { productItem } from '../../../utils/types';
import { deleteProduct } from '../../../rtk/api';
import image from './no-photo.png';
import { useAppDispatch } from '../../../rtk/hooks';

interface ProductItemProps {
	productInfo: productItem;
};

const ProductItem: FC<ProductItemProps> = ({productInfo}) => {
	const dispatch = useAppDispatch();

	return (
		<Link to={`/products/edit/${productInfo._id}`} className={'product'} id={productInfo._id as string}>
			<div className={'imgContainer'}>
				{productInfo.imageUrls[0] ? <img src={`/${productInfo.imageUrls[0]}`} alt={"product image"}/> : <img src={image} alt={"product image"}/>}
			</div>
			<div className={'productFooter'}>
				<h3 className={"name"}><span>Name: </span>{productInfo.name}</h3>
				<h4 className={"price"}><span>Price: </span>{productInfo.price}</h4>
				<p className={"status"}><span>Status: </span>{productInfo.status ? (<span className="statusActive">Active</span>) : (<span className="statusInactive">Inactive</span>) }</p>
				<button className={'btn btnPrimary btnDetails'} onClick={(e) => {e.preventDefault(); dispatch(deleteProduct(productInfo._id)); alert("Product deleted");}}>delete</button>
			</div>
		</Link>
	);
}

export default ProductItem;








