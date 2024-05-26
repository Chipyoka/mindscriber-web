import React from "react";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import AddIcon from "./AddIcon.svg";
import AddNoteModal from "./AddNoteModal.jsx";

const SidePane = () => {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);

	return (
		//returns the add note modal on button click
		<>
			<aside className="col-3 side-pane">
				<button className="btn btn-success" onClick={handleShowModal}>
					<img src={AddIcon} alt="add notes" />
					Add Note
				</button>
				<AddNoteModal show={showModal} handleClose={handleCloseModal} />
			</aside>
		</>
	);
};

export default SidePane;
