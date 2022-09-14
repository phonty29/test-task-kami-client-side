import { FC } from 'react';
import {Link} from 'react-router-dom';

interface ProductItemProps {
	productInfo: {id: number};
};

const ProductItem: FC<ProductItemProps> = ({productInfo}) => {
	return (
		<article className={'product'}>
			<div className={'imgContainer'}>
				{/* <img src={} alt={}/> */}
			</div>
			<div className={'productFooter'}>
				<h3>{}</h3>
				<h4>{}</h4>
				<p>{}</p>
				<Link to={`/products/edit/${productInfo.id}`} className={'.btn .btnPrimary .btnDetails'}>details</Link>
			</div>
		</article>
	);
}

export default ProductItem;














