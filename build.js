var NwBuilder = require('node-webkit-builder');

var nw = new NwBuilder({
  files: './src/**',
  platforms: ['osx'],
  macIcns: './src/icon.icns',
  macZip: true
});

nw.on('log', console.log);

nw.build()
  .then(function() {
    console.log('Build complete');
  })
  .catch(function(err) {
    console.error(err);
  });
