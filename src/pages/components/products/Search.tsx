import { FC } from 'react';
import { useAppDispatch } from '../../../rtk/hooks';
import { searchItems, turnPage } from '../../../rtk/slice';

const Search: FC = () => {
	const dispatch = useAppDispatch();
	
	return (
		<section className={`section search`}>
			<form className={'searchForm'}>
				<div className={'formControl'}>
					<label htmlFor="name">Search for a product</label>
					<input type="text" name="name" id="name" onChange={(e) => {dispatch(searchItems(e.target.value)); dispatch(turnPage(1));}}/>
				</div>
			</form>
		</section>
	);
};

export default Search;

