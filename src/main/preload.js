// src/main/preload.js
const {contextBridge, ipcRenderer } = require("electron");
require("./main.js");
require("../ipc/ipcHandlers.js");

console.log("from preload");

contextBridge.exposeInMainWorld("electronAPI", {
	fetchData: () => ipcRenderer.invoke("fetch-data")
});
