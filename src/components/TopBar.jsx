import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import {useState, useEffect} from "react";
// import axios from "axios";

const TopBar = () => {
	const [topText, setTopText] = useState("From Dreams to Notes");
	useEffect(() => {
		const interval = setInterval(() => {
			//Array of dashboard aniamted toptexts
			const texts = [
				"Track your Ideas",
				"Capture your Thoughts",
				"From Dreams to Notes",
				"Your Ideas into Notes",
				"Mindscriber, Ideas alight!",
			];

			//get random value
			const randomIndex = Math.floor(Math.random() * texts.length);
			const newText = texts[randomIndex];

			//update toptext
			setTopText(newText);
		}, 10000);
		return () => clearInterval(interval);
	}, []);

	//function to generate and format date
	function formatDate(date) {
		const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		const months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];

		const dayOfWeek = daysOfWeek[date.getDay()];
		const dayOfMonth = String(date.getDate()).padStart(2, "0");
		const month = months[date.getMonth()];
		const year = date.getFullYear();

		return `${dayOfWeek} ${dayOfMonth} ${month}, ${year}`;
	}

	const currentDate = new Date();
	const formattedDate = formatDate(currentDate);

	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);
		return () => {
			clearInterval(timerID);
		};
	}, []);

	function tick() {
		setCurrentTime(new Date());
	}

	function formatTime(date) {
		const hours = String(date.getHours()).padStart(2, "0");
		const minutes = String(date.getMinutes()).padStart(2, "0");
		const seconds = String(date.getSeconds()).padStart(2, "0");

		return ` ${hours}:${minutes}:${seconds}`;
	}

	//function to count notes

	const [noteCount, setNoteCount] = useState();

	// Function to fetch note count from the server
	const fetchNoteCount = async () => {
		try {
			// const response = await axios.get("http://localhost:5000/api/note/count");
			// const {count} = response.data;
			// const newCount = String(count).padStart(2, "0");

			// setNoteCount(newCount);
		} catch (error) {
			console.error("Error fetching note count:", error);
		}
	};

	// auto update for note count based on set interval
	useEffect(() => {
		fetchNoteCount();

		const intervalId = setInterval(fetchNoteCount, 1800);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<div className=" container">
				<p className=" salute">Developed By The BlackGeek</p>
				<section className="text-center hero">
					<h1 className="text-center">
						<span className="fade-in">{topText}</span>
					</h1>
					<p className="hero-text">
						{" "}
						Keep track of your thoughts, Start by adding a new note..
					</p>
				</section>
			</div>
			<div className="container summary">
				<div className="row flex-start">
					<div className="col-3 border-left">
						<p className="date">{formattedDate}</p>

						<div className="ya-time">
							<p className="current-time"> {formatTime(currentTime)} HRS</p>
						</div>
					</div>

					<div className="col"></div>
					<div className="col-1">
						<p>Notes: {noteCount}</p>
					</div>
				</div>
			</div>
			<hr />
		</>
	);
};

export default TopBar;
