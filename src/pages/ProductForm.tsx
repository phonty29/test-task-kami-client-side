import {Link, useParams} from 'react-router-dom';
import '../styles/ProductForm.css'

const ProductForm = () => {
	const {id} = useParams();

	return (
			<section className={"section productSection container"}>
				<Link to='products' className={"btn btnPrimary"}>back home</Link>
				<div className="row g-5 mt-3">
					<div className="col-md-5 col-lg-4 order-md-last">
						<h4 className="d-flex justify-content-between align-items-center mb-3">
						<span className="text-primary">Your cart</span>
						<span className="badge bg-primary rounded-pill">3</span>
						</h4>
						<ul className="list-group mb-3">
						<li className="list-group-item d-flex justify-content-between lh-sm">
							<div>
							<h6 className="my-0">Product name</h6>
							<small className="text-muted">Brief description</small>
							</div>
							<span className="text-muted">$12</span>
						</li>
						<li className="list-group-item d-flex justify-content-between lh-sm">
							<div>
							<h6 className="my-0">Second product</h6>
							<small className="text-muted">Brief description</small>
							</div>
							<span className="text-muted">$8</span>
						</li>
						<li className="list-group-item d-flex justify-content-between lh-sm">
							<div>
							<h6 className="my-0">Third item</h6>
							<small className="text-muted">Brief description</small>
							</div>
							<span className="text-muted">$5</span>
						</li>
						<li className="list-group-item d-flex justify-content-between bg-light">
							<div className="text-success">
							<h6 className="my-0">Promo code</h6>
							<small>EXAMPLECODE</small>
							</div>
							<span className="text-success">−$5</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span>Total (USD)</span>
							<strong>$20</strong>
						</li>
						</ul>

						<form className="card p-2">
						<div className="input-group">
							<input type="text" className="form-control" placeholder="Promo code"/>
							<button type="submit" className="btn btn-secondary">Redeem</button>
						</div>
						</form>
					</div>
					<div className="col-md-7 col-lg-8">
						<h4 className="mb-3">Add product</h4>
						<form className="needs-validation was-validated">

						<div className="row g-3">
							<div className="col-sm-6">
							<label htmlFor="firstName" className="form-label">Name of product</label>
							<input type="text" className="form-control" id="firstName" placeholder="" value="" />
							<div className="invalid-feedback">
								Valid first name is required.
							</div>
							</div>

							<div className="col-12">
								<label htmlFor="address" className="form-label">Description</label>
								<input type="text" className="form-control" id="address" placeholder="1234 Main St" />
								<div className="invalid-feedback">
									Please enter your shipping address.
								</div>
							</div>
						</div>

						<hr className="my-4"/>

						<div className={"price-box"}>
							<div className="form-check">
								<input type="checkbox" className="form-check-input" id="same-address"/>
								<label className="form-check-label" htmlFor="same-address">One price for all cities</label>
							</div>
						</div>

						<hr className="my-4"/>

						<h4 className="mb-3">Payment</h4>

						<div className="my-3">
							<div className="form-check">
							<input id="credit" name="paymentMethod" type="radio" className="form-check-input" />
							<label className="form-check-label" htmlFor="credit">Credit card</label>
							</div>
							<div className="form-check">
							<input id="debit" name="paymentMethod" type="radio" className="form-check-input" />
							<label className="form-check-label" htmlFor="debit">Debit card</label>
							</div>
							<div className="form-check">
							<input id="paypal" name="paymentMethod" type="radio" className="form-check-input" />
							<label className="form-check-label" htmlFor="paypal">PayPal</label>
							</div>
						</div>

						<div className="row gy-3">
							<div className="col-md-6">
							<label htmlFor="cc-name" className="form-label">Name on card</label>
							<input type="text" className="form-control" id="cc-name" placeholder="" />
							<small className="text-muted">Full name as displayed on card</small>
							<div className="invalid-feedback">
								Name on card is required
							</div>
							</div>

							<div className="col-md-6">
							<label htmlFor="cc-number" className="form-label">Credit card number</label>
							<input type="text" className="form-control" id="cc-number" placeholder="" />
							<div className="invalid-feedback">
								Credit card number is required
							</div>
							</div>

							<div className="col-md-3">
							<label htmlFor="cc-expiration" className="form-label">Expiration</label>
							<input type="text" className="form-control" id="cc-expiration" placeholder="" />
							<div className="invalid-feedback">
								Expiration date required
							</div>
							</div>

							<div className="col-md-3">
							<label htmlFor="cc-cvv" className="form-label">CVV</label>
							<input type="text" className="form-control" id="cc-cvv" placeholder="" />
							<div className="invalid-feedback">
								Security code required
							</div>
							</div>
						</div>

						<hr className="my-4"/>

						<button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
						</form>
					</div>
    			</div>
			</section>
	);
}

export default ProductForm;