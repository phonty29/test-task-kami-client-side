import { FC } from 'react';
import {Link} from 'react-router-dom';
import demo from '../demo.jpeg'

interface ProductItemProps {
	productInfo: {id: number};
};

const ProductItem: FC<ProductItemProps> = ({productInfo}) => {
	return (
		<article className={'product'}>
			<div className={'imgContainer'}>
				<img src={demo} alt={"product image"}/>
			</div>
			<div className={'productFooter'}>
				<h3 className={"name"}><span>Name: </span>{"Product 1"}</h3>
				<h4 className={"price"}><span>Price: </span>{"7000"}</h4>
				<p className={"status"}><span>Status: </span>{"Active"}</p>
				<Link to={`/products/edit/${productInfo.id}`} className={'btn btnPrimary btnDetails'}>delete</Link>
			</div>
		</article>
	);
}

export default ProductItem;














