// src/ipc/ipcHandlers.js
const { ipcMain } = require('electron');
const db = require('../database/database');

// Example IPC handler to fetch data from the database
ipcMain.handle('fetch-data', async ( ) => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM note', [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
});
