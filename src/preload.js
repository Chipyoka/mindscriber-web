// src/main/preload.js
const {contextBridge, ipcRenderer } = require("electron");

console.log("from preload");

contextBridge.exposeInMainWorld("electronAPI", {
	fetchData: () => ipcRenderer.invoke("fetch-data")
});
