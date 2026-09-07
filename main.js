const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 700,
    height: 900,
    resizable: true,
    autoHideMenuBar: false,
    webPreferences: {
      contextIsolation: true,
      sandbox: false
    }
  });

  // Load local index.html (place your HTML file here)
  win.loadFile(path.join(__dirname, 'index.html'));

  // Optional: open devtools for debugging
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
