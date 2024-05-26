// src/ipc/ipcHandlers.js
// const { ipcMain } = require('electron');
// import {ipcMain} from "electron";
import pkg from 'electron';
const {ipcMain} = pkg;

// const db = require('../database/database');
import db from "../database/database.js";

// Example IPC handler to fetch data from the database
ipcMain.handle("fetch-data", async (event, args) => {
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
});
