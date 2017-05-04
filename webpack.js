npm init -y // erstellt package json
npm install --save-dev webpack // installiert webpack lokal
./node_modules/.bin/webpack app/index.js dist/bundle.js // in root ausführen

// webpack.config.js
var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

./node_modules/.bin/webpack --config webpack.config.js // Ausführung mit Config file

// über NPM scripts
"scripts": {
   "build": "webpack"

npm run build // führt script aus
