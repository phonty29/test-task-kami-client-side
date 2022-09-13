import {Link, useParams} from 'react-router-dom';

const SingleCocktail = () => {
	const {id} = useParams();

	return (
		<CocktailDB>
			<section className={}>
				<Link to='products' className={}>back home</Link>
				<h2 className={}>{}</h2> //name
				<div className={}>wysiwyg</div> //wysiwyg
				<div className={}>
					<img/>
					<input/>
				</div> //media
				<div className={}>
					<input/>
					<input/>
					{ if checked && 
					<div>
						
					</div>
					}
				</div> //pricelist
			</section>
		</CocktailDB>
	);
}

export default SingleCocktail;