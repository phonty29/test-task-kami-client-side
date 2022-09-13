import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import routes from './routes';

const AppRouter = ( ) => {
	return (
		<Router>
			<Routes>
				{routes.map( route => 
					<Route key={route.path} path={route.path} element={route.element} exact={route.exact}/>
				)}
				<Route path="*" element={<Navigate to="products"/>}/>
			</Routes>
		</Router>
	);
};

export default AppRouter;