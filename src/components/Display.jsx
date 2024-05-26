import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import SidePane from "./SidePane.jsx";
import EntryDisplay from "./EntryDisplay.jsx"; // Import EntryDisplay component
// import axios from "axios";
// import getAllNotes from "../database/database.js";
import ViewNoteModal from "./ViewNoteModal.jsx";

const Display = () => {
	const [notes, setNotes] = useState([]);
	const [selectedNote, setSelectedNote] = useState(null);

	// fetch nootes function
	const fetchNotes = async () => {
		try {
			// Assuming you have an endpoint that returns all notes
			// const response = await axios.get("http://localhost:5000/api/note");
			// const allNotes = response.data;
			// setNotes(allNotes);
		} catch (error) {
			console.error("Error fetching notes:", error);
		}
	};

	// send fetch request automatically to update list
	useEffect(() => {
		fetchNotes(); //call the fetch function

		const intervalId = setInterval(fetchNotes, 1800);
		return () => clearInterval(intervalId);
	}, []);

	// Handle modal to add notw
	const handleOpenModal = (note) => {
		setSelectedNote(note);
	};

	const handleCloseModal = () => {
		setSelectedNote(null);
	};

	return (
		<>
			<div className="container-fluid">
				<section className="row display">
					<SidePane />

					<aside className="col-8 entry-display overflow-y-auto scrollable-content">
						{/* Check if notes array is empty */}
						{notes.length === 0 ? (
							// If notes array is empty, render "Add notes to show"
							<>
								<aside className="col-8 entry-display-no">
									<p className="empty">List is Empty</p>
									<p className="empty-sub">kindly add Notes to be displayed.</p>
								</aside>
							</>
						) : (
							// If notes array is not empty, map through notes and render EntryDisplay for each note
							notes.map((note) => (
								<>
									<EntryDisplay
										key={note.NOTE_ID}
										note={note}
										handleOpenModal={handleOpenModal}
									/>
									{/* </aside> */}
								</>
							))
						)}
						{/* Render ViewNoteModal if a note is selected */}
						{selectedNote && (
							<ViewNoteModal
								show={true}
								handleClose={handleCloseModal}
								note={selectedNote}
							/>
						)}
					</aside>
				</section>
			</div>
		</>
	);
};

export default Display;
