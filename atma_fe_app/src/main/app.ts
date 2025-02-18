import { BrowserWindow } from "electron";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

class Application{
    protected device_connected = false;

    protected start(){
    }

    public run(){
      // Create the browser window.
      const mainWindow = new BrowserWindow({
          // height: 600,
          // width: 800,
          webPreferences: {
          preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
          },
      });
      
      mainWindow.maximize()

      mainWindow.webContents.session.on('select-serial-port', (event, portList, webContents, callback) => {
        // Add listeners to handle ports being added or removed before the callback for `select-serial-port`
        // is called.
        mainWindow.webContents.session.on('serial-port-added', (event, port) => {
          console.log('serial-port-added FIRED WITH', port)
          // Optionally update portList to add the new port
        })
    
        mainWindow.webContents.session.on('serial-port-removed', (event, port) => {
          console.log('serial-port-removed FIRED WITH', port)
          // Optionally update portList to remove the port
        })
    
        event.preventDefault()
        if (portList && portList.length > 0) {
          callback(portList[0].portId)
        } else {
          // eslint-disable-next-line n/no-callback-literal
          callback('') // Could not find any matching devices
        }
      })

      mainWindow.webContents.session.setPermissionCheckHandler((webContents, permission, requestingOrigin, details) => {
          if (permission === 'serial') {
            return true
          }

          return false
      })

      mainWindow.webContents.session.setDevicePermissionHandler((details) => {
          if (details.deviceType === 'serial') {
            return true
          }

          return false
      })

      // and load the index.html of the app.
      mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
      // Open the DevTools.
      mainWindow.webContents.openDevTools();
    }
}

const app = new Application();

export default app;