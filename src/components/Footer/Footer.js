import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<div>
					&copy; <a href="/about"> Online Classroom</a>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
