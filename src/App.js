// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./components/GlobalStyles"; // Import the GlobalStyles component
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
	return (
		<Router>
			<div className="App">
				<GlobalStyles /> {/* Include the GlobalStyles component */}
				<NavBar />
				{/* Define your routes */}
				<Routes>
					<Route
						exact
						path="https://Moamen112.github.io/dental/"
						element={<Home />}
					/>
					<Route
						path="https://Moamen112.github.io/dental/about"
						element={<AboutUs />}
					/>
					<Route
						path="https://Moamen112.github.io/dental/services"
						element={<Services />}
					/>
					<Route
						path="https://Moamen112.github.io/dental/contact"
						element={<Contact />}
					/>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
