import React from "react";
import { Col, CardDeck, Card, Button } from "react-bootstrap";
import "./Course.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Course = (props) => {
	const { image, title, skill, difficulty, price } = props.course;
	return (
		<Col lg={4} md={6}>
			<CardDeck>
				<Card>
					<Card.Img variant="top" src={image} />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<small className="text-muted">{skill}</small>
						<Card.Text>Defficulty: <strong>{difficulty}</strong></Card.Text>
						<Card.Text>Price: ${price}</Card.Text>
						<Button variant="primary" size="sm" block onClick={() => props.handleEnrollNow(props.course)}>
							<FontAwesomeIcon icon={faShoppingCart} /> Enroll now
						</Button>
					</Card.Body>
				</Card>
			</CardDeck>
		</Col>
	);
};

export default Course;
