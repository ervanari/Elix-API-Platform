const { app, BrowserWindow } = require("electron");
const path = require('path')
const url = require('url')

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 });
    win.maximize();

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'client/build/index.html'),
        protocol: 'file:',
        slashes: true
    }))
    win.webContents.openDevTools()

    // win.loadURL("http://localhost:3000/");
}
app.on("ready", createWindow);
