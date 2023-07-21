mainWindow = new BrowserWindow({
    width: 1634,
    height: 855,
});

mainWindow.loadURL(`file://${__dirname}/gui/index.html`);
app.on("ready", createWindow);