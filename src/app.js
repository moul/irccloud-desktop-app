var gui = require('nw.gui'),
    win = gui.Window.get();


var platform = /^win/.test(process.platform) ? 'win32'
  : /^darwin/.test(process.platform) ? 'osx64'
  : 'linux' + (process.arch == 'ia32' ? '32' : '64');
var isOSX = platform === 'osx64',
    isWindows = platform === 'win32',
    isLinux = platform.indexOf('linux') === 0;


// Create the app menu
var mainMenu = new gui.Menu({type: 'menubar'});
if (mainMenu.createMacBuiltin) {
  mainMenu.createMacBuiltin('IRC Cloud');
}
win.menu = mainMenu;


// OS X
if (isOSX) {
  // Re-Show the window when the dock icon is pressed
  gui.App.on('reopen', function() {
    win.show();
  });
}


// Don't quit the app when the window is closed
win.on('close', function(quit) {
  if (quit) {
    win.close(true);
  } else {
    win.hide();
  }
});


// Listen for DOM load
window.onload = function() {
  var app = document.getElementById('app');
  var titleRegExp = /\((\d)\)/;

  // Watch the iframe every 250ms
  setInterval(function() {
    // Sync the title
    document.title = app.contentDocument.title;

    // Update the badge
    var match = titleRegExp.exec(document.title);
    var label = match && match[1] || '';
    win.setBadgeLabel(label);
  }, 250);
};


// Devel
win.showDevTools();
