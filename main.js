const { app, BrowserWindow } = require('electron')
var path = require('path')

let win

function createWindow () {
  // Create the window
  if (process.platform == 'darwin') {
    win = new BrowserWindow({ width: 300, height: 480, titleBarStyle: 'hiddenInset', resizable: false, fullscreen: false, icon: path.join(__dirname, "icons/png/64x64.png") })
  } else if (process.platform == 'win32') {
    win = new BrowserWindow({ width: 306, height: 484, titleBarStyle: 'hiddenInset', resizable: false, fullscreen: false, icon: path.join(__dirname, "icons/png/64x64.png") })
    win.setMenu(null);
  } else {
    win = new BrowserWindow({ width: 300, height: 455, titleBarStyle: 'hiddenInset', resizable: false, fullscreen: false, icon: path.join(__dirname, "icons/png/64x64.png") })
    win.setMenu(null);
  }
  win.loadFile('index.html')

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})
