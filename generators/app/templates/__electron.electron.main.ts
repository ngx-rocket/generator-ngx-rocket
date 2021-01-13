import { app, BrowserWindow, screen } from 'electron';

// Enable live reload if process is started with the --serve argument
const liveReload = process.argv.slice(2).some(arg => arg === '--serve');

function createWindow() {
  const size = screen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: liveReload
    }
  });

  if (liveReload) {
    mainWindow.webContents.openDevTools();
    require('electron-reload')(__dirname, { electron: require(`${__dirname}/node_modules/electron`) });
    mainWindow.loadURL('http://localhost:4200');
  } else {
    // Load the index.html of the app.
    mainWindow.loadFile('dist-electron/index.html');
  }  
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
