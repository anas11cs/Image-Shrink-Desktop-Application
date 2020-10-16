//console.log('Hello World');
const {app, BrowserWindow} = require('electron');
// Here curly braces specifies that after requiring, what we need
// to fetch out of electron by de-structuring
// 'app' actually manages entire life cycle of our app
// 'BrowserWindow' is a class that is used to create a Desktop Window
function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title:'Image Shrink',
        width:500,
        height:600
    });
}
app.on('ready',createMainWindow);