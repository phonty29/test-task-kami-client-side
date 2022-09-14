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
				<h3>{"Text 1"}</h3>
				<h4>{"Text 2"}</h4>
				<p>{"Text 3"}</p>
				<Link to={`/products/edit/${productInfo.id}`} className={'.btn .btnPrimary .btnDetails'}>details</Link>
			</div>
		</article>
	);
}

export default ProductItem;














