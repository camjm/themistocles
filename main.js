// import 2 electron modules with CommonJS module syntax (EMS not supported in electron)
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    // BrowserWindow creates and manages windows
    var win = new BrowserWindow({
        webPreferences: {
            // these are required to expose node stuff in the Renderer process
            nodeIntegration: true,
            contextIsolation: false
        },
        width: 800,
        height: 600
    });
    // each window displays a web page (local or remote) and runs in it's own renderer process
    win.loadFile('index.html');
}

// the app module controls the app's event lifecycle and adheres to node's' asynchronous event-driven architecture
app.whenReady().then(() => {
    // can only create windows when the electron app is ready
    createWindow();

    // in macOs: open a new window when the app is activated without any windows open
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

// develop the app further by listening for events emitted by app and BrowserWindow instances... 

app.on('window-all-closed', () => {
    // on windows and linux: quit the application entirely if all windows are closed
    if (process.platform !== 'darwin') app.quit()
  })