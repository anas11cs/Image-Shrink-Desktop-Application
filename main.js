// console.log('Hello World');
const {app, BrowserWindow, Menu/*, globalShortcut*/} = require('electron'); // Node Js module syntax
// Here curly braces specifies that after requiring, what we need
// to fetch out of electron by de-structuring
// 'app' actually manages entire life cycle of our app
// 'BrowserWindow' is a class that is used to create a Desktop Window

// Set Environment
process.env.NODE_ENV = 'development'; // Currently, Electron in "Development" phase
const isDev = process.env.NODE_ENV !== 'production' ? true : false; // if(process.env.NODE_ENV !== 'production'){isDev=true;}else{isDev=false;}
const isMac = process.platform === 'darwin' ? true : false;
// Windows Used Below
let mainWindow;
let aboutWindow;
// Main Window Below
function createMainWindow(){
    mainWindow = new BrowserWindow({
        webPreferences: {
            webSecurity: false,
             nodeIntegration:true
          },
        title:'Image Shrink',
        width:500,
        height:600,
        icon: `${__dirname}/assets/icons/icons/Icon_256x256.png`,
        resizable: isDev,
        backgroundColor:'white'
    })
    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
    // KEEP IN MIND SYNTAX IS(back tick) ` `, not ' ' (not Commas)
}
// About Window Below
function createAboutWindow(){
    aboutWindow = new BrowserWindow({
        webPreferences: {
            webSecurity: false,
             nodeIntegration:true
          },
        title:'Image Shrink',
        width:500,
        height:600,
        icon: `${__dirname}/assets/icons/icons/Icon_256x256.png`,
        resizable: isDev,
        backgroundColor:'black'
    })
    aboutWindow.loadURL(`file://${__dirname}/app/about.html`)
    // KEEP IN MIND SYNTAX IS(back tick) ` `, not ' ' (not Commas)
}
//app.on('ready',createMainWindow);
//app.whenReady().then(createMainWindow) ARE SAME AS //app.on('ready',createMainWindow);
// 
app.on('ready',()=>{
    createMainWindow()

    const mainMenu = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(mainMenu)
    // globalShortcut.register('CmdOrCtrl+R', ()=>mainWindow.reload())
    // globalShortcut.register(isMac ? 'Ctrl+Alt+I':'Ctrl+Shift+I',()=>mainWindow.toggleDevTools())
    mainWindow.on('closed',() => (mainWindow=null))
});

const menu =[
    {
        role:'fileMenu',
        // label:'File',
        // submenu: [
        //     {
        //         // Quit Option Added
        //         label: 'Quit',
        //         accelerator: 'CmdOrCtrl+W',
        //         click: ()=> app.quit() 
        //         // Quit Option Above
        //     }
        // ]
    },
    ...(isDev ?
        [
            {
                label:'Developer',
                submenu:[
                    {role:'reload'},
                    {role:'forcereload'},
                    {type:'separator'},
                    {role:'toggleDevTools'},
                ],
            },
        ]
        :
        [
            // No Change
        ]
        ), // isDev End
    // ...(isDev ? [
    //     {
    //         label:'Developer',
    //         submenu:[
    //             {role:'reload'},
    //             {role:'forcereload'},
    //             {type:'separator'},
    //             {role:'toggledevtools'},
    //         ]
    //     }
    // ]:[])
    ...(isMac
        ? [
            {
                label:app.name,
                submenu:[
                    {
                        label:'About',
                        click: createAboutWindow
                    },
                ],
            }
        ]
        :
        [
            {
                label:'Help',
                submenu:[
                    {
                        label:'About',
                        click: createAboutWindow
                    },
                ], 
            }
        ]
    ),
]

// Mac Configurations
app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
})
//

app.allowRendererProcessReuse=true;

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