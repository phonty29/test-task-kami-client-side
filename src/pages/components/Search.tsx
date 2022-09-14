import { FC } from 'react';

const Search: FC = () => {
	return (
		<section className={`section search`}>
			<form className={'searchForm'}>
				<div className={'formControl'}>
					<label htmlFor="name">Search for a product</label>
					<input type="text" name="name" id="name"/>
				</div>
			</form>
		</section>
	);
};

export default Search;
