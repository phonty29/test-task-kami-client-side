import Products from '/pages/Products'; 
import ProductForm from '/pages/ProductForm'; 

const routes = [
	{name: 'Products', path: 'products', element: <Products/>, exact: true},
	{name: 'ProductCreate', path: 'products/create', element: <ProductForm/>, exact: true},
	{name: 'ProductEdit', path: 'products/edit/:id', element: <ProductForm/>, exact: true}
];

export default routes;