// console.log('Hello World');
const {app, BrowserWindow} = require('electron');
// Here curly braces specifies that after requiring, what we need
// to fetch out of electron by de-structuring
// 'app' actually manages entire life cycle of our app
// 'BrowserWindow' is a class that is used to create a Desktop Window
let mainWindow;
function createMainWindow(){
    const mainWindow = new BrowserWindow({
        webPreferences: {
            webSecurity: false,
             nodeIntegration:true
          },
        title:'Image Shrink',
        width:500,
        height:600
    })
    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
    // KEEP IN MIND SYNTAX IS ` `, not ' '
}
app.on('ready',createMainWindow);
// GET STARTED W/ELECTRION BELOW
// // const { app, BrowserWindow } = require('electron')

// // function createWindow () {
// //   const win = new BrowserWindow({
// //     width: 800,
// //     height: 600,
// //     webPreferences: {
// //       nodeIntegration: true
// //     }
// //   })

// //   win.loadFile('index.html')
// //   win.webContents.openDevTools()
// // }

// // app.whenReady().then(createWindow)

// // app.on('window-all-closed', () => {
// //   if (process.platform !== 'darwin') {
// //     app.quit()
// //   }
// // })

// // app.on('activate', () => {
// //   if (BrowserWindow.getAllWindows().length === 0) {
// //     createWindow()
// //   }
// // })