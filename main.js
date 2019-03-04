const electron = require("electron");
const { app, BrowserWindow } = electron;
const path = require("path");

const MAIN_HTML = path.join("file://", __dirname, "main.html");
// const MAIN_HTML = "http://glslsandbox.com/e#53029.0";
const CHILD_PADDING = 50;
const onAppReady = function() {
  let parent = new BrowserWindow({
    type: "desktop",
    acceptFirstMouse: true,
    transparent: true
    // fullscreen: true
    // kiosk: true
    // skipTaskbar: false,
    // alwaysOnTop: true,
    // frame: true
  });

  parent.openDevTools();

  parent.setPosition(0, 0);
  parent.setMenu(null);
  let { screen } = electron;
  let size = screen.getPrimaryDisplay().workAreaSize;
  parent.setSize(size.width + 1, size.height);

  parent.once("close", () => {
    parent = null;
  });

  parent.loadURL(MAIN_HTML);
};

// app.on("ready", onAppReady);
app.on("ready", () => setTimeout(onAppReady, 500));
