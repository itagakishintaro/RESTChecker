var app = require( 'app' ); // Module to control application life.
var BrowserWindow = require( 'browser-window' ); // Module to create native browser window.

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on( 'window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if ( process.platform != 'darwin' ) {
        app.quit();
    }
} );

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on( 'ready', function () {
    // Create the browser window.
    mainWindow = new BrowserWindow( {
        width: 600,
        height: 800,
        'min-width': 600,
        'min-height': 800,
        'accept-first-mouse': true,
        'title-bar-style': 'hidden'
    } );

    // and load the index.html of the app.
    mainWindow.loadUrl( 'file://' + __dirname + '/index.html' );

    // Open the DevTools.
    //mainWindow.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on( 'closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    } );

    // Add menu
    setApplicationMenu();
} );


// http://yonda1229.hatenablog.com/entry/2015/10/03/163300
var setApplicationMenu = () => {
    var Menu = require( 'menu' );
    var menu = Menu.buildFromTemplate( [
        {
            label: "Application",
            submenu: [
                {
                    label: "About Application",
                    selector: "orderFrontStandardAboutPanel:"
                },
                {
                    type: "separator"
                },
                {
                    label: "Quit",
                    accelerator: "Command+Q",
                    click: function () {
                        app.quit();
                    }
                }
      ]
    },
        {
            label: "View",
            submenu: [
                {
                    label: 'Reload',
                    accelerator: 'CmdOrCtrl+R',
                    click: function ( item, focusedWindow ) {
                        if ( focusedWindow )
                            focusedWindow.reload();
                    }
        },
      ]
    },
        {
            label: "Edit",
            submenu: [
                {
                    label: "Undo",
                    accelerator: "Command+Z",
                    selector: "undo:"
                },
                {
                    label: "Redo",
                    accelerator: "Shift+Command+Z",
                    selector: "redo:"
                },
                {
                    type: "separator"
                },
                {
                    label: "Cut",
                    accelerator: "Command+X",
                    selector: "cut:"
                },
                {
                    label: "Copy",
                    accelerator: "Command+C",
                    selector: "copy:"
                },
                {
                    label: "Paste",
                    accelerator: "Command+V",
                    selector: "paste:"
                }
      ]
    }
  ] );
    Menu.setApplicationMenu( menu );
}