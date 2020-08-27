import React from "react";
import fakeData from "../../fakeData";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
import "./CourseList.css";

const CourseList = () => {
	const courseData = fakeData.slice(0, 12);
	const [courses, setCourses] = useState(courseData);
	const [cart, setCart] = useState([]);
	const handleEnrollNow = (course) => {
		const newCart = [...cart, course];
		setCart(newCart);
	};
	return (
		<Container>
			<div className="course-list">
				<h4>Available Courses</h4>
				<Row>
					<Col sm={9}>
						<Row>
							{courses.map((course) => (
								<Course course={course} handleEnrollNow={handleEnrollNow} key={Math.random() + 100} />
							))}
						</Row>
					</Col>
					<Col sm={3}>
						<Cart cart={cart}></Cart>
					</Col>
				</Row>
			</div>
		</Container>
	);
};

export default CourseList;
