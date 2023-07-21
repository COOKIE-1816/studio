mainWindow = new BrowserWindow({
    width: 800,
    height: 520,
});

mainWindow.loadURL(`file://${__dirname}/gui/index.html`);
app.on("ready", createWindow);