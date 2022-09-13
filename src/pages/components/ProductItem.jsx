import {Link} from 'react-router-dom';

const ProductItem = ({props}) => {
	return (
		<article className={}>
			<div className={}>
				<img src={} alt={}/>
			</div>
			<div className={}>
				<h3>{}</h3>
				<h4>{}</h4>
				<p>{}</p>
				<Link to={`/products/edit/${props.id}`} className={}>details</Link>
			</div>
		</article>
	);
}

export default CocktailDBItem;