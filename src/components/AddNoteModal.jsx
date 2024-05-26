import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import {useState} from "react";
// import axios from "axios";

const AddNoteModal = ({show, handleClose}) => {
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");
	const [content, setContent] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	//validation not to accept special chars
	const allowCharsRegex = /^[a-zA-Z ]*$/;

	const handleInputChange = (event) => {
		const {
			target: {value, name},
		} = event;
		setErrorMessage(" ");

		switch (name) {
			case "title":
				if (!allowCharsRegex.test(value)) {
					setErrorMessage("Only Letters Allowed as Title!");
					return;
				}
				setTitle(value);
				break;
			case "category":
				if (!allowCharsRegex.test(value)) {
					setErrorMessage("Only Letters Allowed as Category!");
					return;
				}
				setCategory(value);
				break;
			case "content":
				setContent(value);
				break;
			default:
				break;
		}
	};

	const handleSave = async (event) => {
		// Generate date and time

		//function to format date
		function formatDate(date) {
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

			const dayOfMonth = String(date.getDate()).padStart(2, "0");
			const month = months[date.getMonth()];
			const year = date.getFullYear();
			const hours = String(date.getHours()).padStart(2, "0");
			const minutes = String(date.getMinutes()).padStart(2, "0");

			return `${dayOfMonth} ${month}, ${year}   ${hours}:${minutes}`;
		}

		const currentDate = new Date();
		const formattedDate = formatDate(currentDate);

		event.preventDefault();

		if (!title) {
			setErrorMessage("Please fill out Title!");
			return;
		} else if (!category) {
			setErrorMessage("Please fill out Category!");
			return;
		} else if (!content) {
			setErrorMessage("Please fill out Content!");
			return;
		} else {
			console.log("Validation Successful !");
		}

		//ADD note through API endpoint
		try {
			// await axios.post("http://localhost:5000/api/note", {
			// 	NOTE_CATEGORY: category,
			// 	NOTE_TITLE: title,
			// 	NOTE_CONTENT: content,
			// 	NOTE_DATE: formattedDate,
			// });

			// Reset input fields
			setTitle("");
			setCategory("");
			setContent("");

			// Close modal
			handleClose();
			// window.location.reload();
		} catch (error) {
			console.error("Error creating note:", error);
		}
	};

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
						<div className="modal-header">
							<h5 className="modal-title">Add Note</h5>
						</div>
						<p></p>
						<div className="modal-body">
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									maxvalue="36"
									placeholder="Title: @ New chicken recipe"
									name="title"
									value={title}
									onChange={handleInputChange}
									maxLength="30"
									required
								/>
							</div>
							<div className="form-group my-3">
								<input
									type="text"
									className="form-control"
									placeholder="Category: eg. Academic, Social..."
									name="category"
									value={category}
									onChange={handleInputChange}
									maxLength="15"
									required
								/>
							</div>

							<div className="form-group">
								<hr />

								<textarea
									className="form-control"
									rows={5}
									placeholder="Enter Content (Max 250 Words)"
									value={content}
									id="content"
									name="content"
									onChange={handleInputChange}
									maxLength="300"
								/>
								{errorMessage && <div className="error">{errorMessage}</div>}
							</div>
						</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-outline-danger"
								onClick={handleClose}
							>
								Cancel
							</button>
							<button type="button" className="btn btn-success" onClick={handleSave}>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddNoteModal;
