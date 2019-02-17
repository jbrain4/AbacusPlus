const { app, BrowserWindow, Menu, shell } = require('electron')
var path = require('path')

let win

let menuTemplate
const name = app.getName()
const dir = __dirname

if (process.platform === 'darwin') {
  menuTemplate = [{
    label: name,
    submenu: [{
      label: `About ${name}`,
      role: 'about'
    }, {
      type: 'separator'
    }, {
      label: 'Preferences',
      accelerator: 'Command+,',
      click: () => {
        shell.openItem(`${dir}/preferences.css`)
        console.log('Opening Prefs')
      }
    }, {
      type: 'separator'
    }, {
      label: 'Services',
      role: 'services',
      submenu: []
    }, {
      type: 'separator'
    }, {
      label: `Hide ${name}`,
      accelerator: 'Command+H',
      role: 'hide'
    }, {
      label: `Hide Others`,
      accelerator: 'Command+Alt+H',
      role: 'hideothers'
    }, {
      label: 'Show All',
      role: 'unhide'
    }, {
      type: 'separator'
    }, {
      label: 'Quit',
      accelerator: 'Command+Q',
      click: () => {
        app.quit()
      }
    }]
  }]
} else {
  menuTemplate = [{
    label: 'Edit',
    submenu: [{
      label: `About ${name}`,
      role: 'about'
    }, {
      type: 'separator'
    }, {
      label: 'Preferences',
      accelerator: 'Ctrl+,',
      click: () => {
        shell.openExternal("./preferences.css")
        console.log('Opening Prefs')
      }
    }, {
      type: 'separator'
    }, {
      label: 'Services',
      role: 'services',
      submenu: []
    }, {
      type: 'separator'
    }, {
      label: `Hide ${name}`,
      accelerator: 'Ctrl+H',
      role: 'hide'
    }, {
      label: `Hide Others`,
      accelerator: 'Ctrl+Alt+H',
      role: 'hideothers'
    }, {
      label: 'Show All',
      role: 'unhide'
    }, {
      type: 'separator'
    }, {
      label: 'Quit',
      accelerator: 'Ctrl+Q',
      click: () => {
        app.quit()
      }
    }]
  }]
}

function createWindow () {
  // Create the window
  if (process.platform == 'darwin') {
    width = 300;
    height = 480;
  } else if (process.platform == 'win32') {
    width = 306;
    height = 484;
  } else {
    width = 300;
    height = 455;
  }

  win = new BrowserWindow({ width: width, height: height, titleBarStyle: 'hiddenInset', resizable: false, fullscreen: false, icon: path.join(__dirname, "icons/png/64x64.png") })
  win.setMenu(null);

  win.loadFile('index.html')

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', () => {
  createWindow()
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)
})

app.on('window-all-closed', () => {
  app.quit()
})
