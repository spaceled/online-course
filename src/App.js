import React from "react";
import "./App.css";
import CourseList from "./components/CourseList/CourseList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<CourseList></CourseList>
			<Footer></Footer>
		</div>
	);
}

export default App;
