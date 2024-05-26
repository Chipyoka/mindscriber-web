// const db = require("../database/database");

import db from "../database/database.js";

const fetchData = () => {
	return new Promise((resolve, reject) => {
		db.all("SELECT * FROM note", [], (err, rows) => {
			if (err) {
				reject(err);
			} else {
				resolve(rows);
				console.log(rows);
			}
		});
	});
};
fetchData();

// module.exports = {fetchData};
export default fetchData;
