// javascript
const wdio = require("webdriverio");
const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: "Android",
    platformVersion: "8.0",
    deviceName: "Android Emulator",
    app: "/Users/mohitsharma/Desktop/nodeJS/app-testing/ApiDemos-debug.apk",
    automationName: "UiAutomator2"
  }
};

const client = wdio.remote(opts);
client
  .init()
  .click("~App")
  .click("~Alert Dialogs")
  .back()
  .back()
  .end();
