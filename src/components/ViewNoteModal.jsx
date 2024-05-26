import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap for styling
// import axios from "axios";

const ViewNoteModal = ({show, handleClose, noteId}) => {
	const [note, setNote] = useState(null);

	//fetch note function from the server endpoint
	useEffect(() => {
		const fetchNoteById = async () => {
			try {
				// const response = await axios.get(`http://localhost:5000/api/note/${noteId}`);
				// const noteData = response.data;
				// setNote(noteData);
			} catch (error) {
				console.error("Error fetching note:", error);
			}
		};

		if (noteId) {
			fetchNoteById();
		}
	}, [noteId]);

	//function to handle deletion on 'delete' button click

	const handleDelete = async () => {
		try {
			// await axios.delete(`http://localhost:5000/api/note/${noteId}`);
			handleClose();
		} catch (error) {
			console.error("Error deleting note:", error);
		}
	};

	//update note by edit
	//code coming soon
	return (
		<>
			<div
				className={`modal fade ${show ? "show" : ""}`}
				style={{display: show ? "block" : "none"}}
				tabIndex="-1"
				role="dialog"
			>
				<div className="modal-dialog modal-dialog-centered my-2" role="document">
					<div className="modal-content">
						<div className="modal-body">
							<div className="View-note-sec">
								<h5 className="modal-title capitalize">{note?.NOTE_TITLE}</h5>
								<h5 className="view-cat capitalize">{note?.NOTE_CATEGORY}</h5>
								<div className="View-note-sec">
									<span className="view-date">{note?.NOTE_DATE}</span>
								</div>
							</div>
							<hr />
							<div className="View-note-sec my-3">
								<p>{note?.NOTE_CONTENT}</p>
							</div>
						</div>
						<div className="modal-footer">
							{/* Buttons for delete and done to close view note modal */}
							<button
								type="button"
								className="btn btn-outline-danger"
								onClick={handleDelete}
							>
								Delete
							</button>
							<button type="button" className="btn btn-success" onClick={handleClose}>
								Done
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ViewNoteModal;
