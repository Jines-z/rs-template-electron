const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const path = require('path')
const isDev = process.env.NODE_ENV === 'development'

const createWindow = () => {
    Menu.setApplicationMenu(null)
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        minWidth: 1000,
        minHeight: 500,
        show: false,
        center: true,
        frame: false,
        icon: path.join(__dirname, 'icons', 'icon.ico'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }
    })
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })
    if (isDev) {
        mainWindow.loadURL('http://localhost:8080/#/')
    } else {
        mainWindow.loadURL(path.join(__dirname, '../../', 'dist', 'index.html'))
    }
    ipcMain.on('min', e => mainWindow.minimize())
    ipcMain.on('max', e => {
        if (mainWindow.isMaximized()) {
            mainWindow.unmaximize()
        } else {
            mainWindow.maximize()
        }
    })
    ipcMain.on('close', e => mainWindow.close())
}

app.disableHardwareAcceleration()
app.whenReady().then(() => {
    createWindow()
    app.on('activate', function() {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})
