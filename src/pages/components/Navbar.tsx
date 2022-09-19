import classes from './CocktailDB.module.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className={"navbar"}>
			<div className={"navCenter"}>
				<Link to='/products' className={"brand"}>TEST-TASK</Link>
				<ul className={"navLinks"}>
					<li className={"btnPrimary"}><Link to='/products/create'>Add new</Link></li>
				</ul>
			</div> 
		</nav>
	);
}

export default Navbar; 