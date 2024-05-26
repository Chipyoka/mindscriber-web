// src/database/database.js
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");
const {app} = require("electron");

// const userDataPath = app.getPath('userData');
// const dbPath = path.join(userDataPath, 'mindscriber.sqlite');
const originalDbPath = path.join(__dirname, "mindscriber.sqlite");

// Copy database file to user data directory if it doesn't exist
// if (!fs.existsSync(dbPath)) {
//     fs.copyFileSync(originalDbPath, dbPath);
// }

const db = new sqlite3.Database(originalDbPath, (err) => {
	if (err) {
		console.error("Error opening database:", err);
	} else {
		console.log("Database opened successfully");
	}
});

function getAllNotes() {
	return new Promise((resolve, reject) => {
		db.all("SELECT * FROM note", (err, rows) => {
			if (err) {
				reject(err);
			} else {
				resolve(rows);
				console.log(rows);
			}
		});
	});
}

getAllNotes();

module.exports = db;

// export default {db, getAllNotes};
