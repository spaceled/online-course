import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const Cart = (props) => {
	const { cart } = props;
	const total = cart.reduce((total, course) => total + course.price, 0);
	const tax = total / 10;

	const getRoundFigure = (num) => {
		const precision = num.toFixed(2);
		return Number(precision);
	};

	return (
		<div className="cart">
			<div className="header">
				<h4>Course Summary</h4>
				<div>Course enrolled: {cart.length}</div>
			</div>
			<div className="body">
				<div>
					<span>Total Price: </span>
					<span>${getRoundFigure(total)}</span>
				</div>
				<div>
					<span>Tax: </span>
					<span>${getRoundFigure(tax)}</span>
				</div>
				<div>
					<span>Grand total:</span> <span>${getRoundFigure(total + tax)}</span>
				</div>

				<Button variant="primary" size="sm" block>
					<FontAwesomeIcon icon={faShoppingBag} /> Enroll Course
				</Button>
			</div>
		</div>
	);
};

export default Cart;
