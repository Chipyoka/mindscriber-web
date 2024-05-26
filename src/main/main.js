// src/main/main.js
const {app, BrowserWindow} = require("electron");
const path = require("path");
const {ipcMain} = require("electron");
const db = require("../database/database");

// Initialize the database
require("../database/database");

async function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 1180,
		height: 700,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			// preload: path.join(__dirname, "preload.js"),
		},
	});

	// mainWindow.loadFile(path.join(__dirname, '../../public/index.html'));
	const isDev = await import("electron-is-dev");
	mainWindow.loadURL(
		isDev.default
			? "http://localhost:3000"
			: `file://${path.join(__dirname, "mindscriber/public/index.html")}`
	);
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

// Example IPC handler to fetch data from the database
ipcMain.handle("fetch-data", async (event, args) => {
	return new Promise((resolve, reject) => {
		db.all("SELECT * FROM note", [], (err, rows) => {
			if (err) {
				reject(err);
			} else {
				resolve(rows);
			}
		});
	});
});




