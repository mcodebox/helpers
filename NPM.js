#############################################################
## NPM
npm init // erstellt package.json (mit Fragen)
npm init --yes // erstellt default package.json
npm install packagename1 packagename2 --save // installiert Packete in node_modules und vermerkt sie im package.json
npm uninstall --save packagename // deintslliert package und löscht es aus package.json

npm install d3 --save // installiert d3.js
npm install jquery --save // installiert jquery
npm install bootstrap@3 --save
npm install openlayers --save
npm install leaflet --save
npm install --save glyphicons
npm install font-awesome --save
npm list grunt // zeigt lokale Version von grunt


// lokaler Server (Node Standard) // https://www.npmjs.com/package/http-server
npm install http-server -g // installiert http-server global
http-server [path] [options] // startet http-server in aktuellem Verzeichnis
http-server D:\Folder // startet http-server in bestimmtem Verzeichnis
http-server -p 8088 // startet http-server mit Port 8088
http-server -a test567 // startet http-server mit url test567
http-server -p 4004 -a http://test567 // startet http-server mit Port 4004 und mit url test567
http-server -a myhost -p 4004
http-server -p 4004
http-server -p 4004 -s -o
http-server -p 4004 -a localhost
