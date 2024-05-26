import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import ViewNoteModal from "./ViewNoteModal";

const EntryDisplay = ({note}) => {
	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<button type="button" className="btn entry row" onClick={handleOpenModal}>
				{/* <div className="col-1">{note.NOTE_ID}</div> */}
				<div className="col-2 left capitalize">{note.NOTE_CATEGORY}</div>
				<div className="col-4 left capitalize">{note.NOTE_TITLE}</div>
				<div className="col-3 right">{note.NOTE_DATE}</div>
			</button>
			<ViewNoteModal
				show={showModal}
				handleClose={handleCloseModal}
				noteId={note.NOTE_ID} // Pass the note ID to ViewNoteModal
			/>
		</>
	);
};

export default EntryDisplay;
