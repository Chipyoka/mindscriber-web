const sqlite3 = require("sqlite3").verbose();
const {app, BrowserWindow} = require("electron");
const path = require("path");
const {ipcMain} = require("electron");

let db;

async function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true, // **Security Risk:** Exposes entire Node.js environment
		},
	});

	const isDev = await import("electron-is-dev");
	mainWindow.loadURL(
		isDev.default
			? "http://localhost:3000"
			: `file://${path.join(__dirname, "../../public/index.html")}`
	);

	// Open the database connection
	db = new sqlite3.Database("../database/mindscriber.sqlite", (err) => {
		if (err) {
			console.error(err.message);
		} else {
			console.log("Connected to the database.");
		}
	});

	// Respond to IPC requests from the React component
	ipcMain.on("fetch-data", (event) => {
		db.all("SELECT * FROM note", (err, rows) => {
			if (err) {
				console.error(err.message);
				event.sender.send("fetch-data-error", err.message);
			} else {
				event.sender.send("fetch-data-response", rows);
			}
		});
	});
}

app.whenReady().then(createWindow);

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
