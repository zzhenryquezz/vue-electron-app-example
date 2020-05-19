const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow () {    
    const windown = new BrowserWindow({
        width: 800,
        height: 600,
    });

    if (process.env.NODE_ENV !== "production") {
        // load port 8080
        windown.loadURL("http://localhost:8080");
    } else {
        // get the entire path of the file
        const fileName = path.resolve(__dirname, "./dist/index.html");
        // load electron with a file
        windown.loadURL(`file://${fileName}`);
    }
}


app.whenReady().then(createWindow);