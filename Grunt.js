#############################################################
## Grunt
npm install grunt -g // installiert Grunt global
npm install grunt --save-dev // installiert Grunt ins Verzeichnis
npm install grunt-contrib-watch --save-dev // watcher wird installiert
grunt --version // zeigt grunt version

npm install --save-dev grunt-sass // installiert grunt-sass

// automatisch Gruntfile erzeugen mit grunt-init
npm install -g grunt-init // installiert grunt-init global
git clone https://github.com/gruntjs/grunt-init-gruntfile.git C:\Users\BENUTZER\.grunt-init\gruntfile // klont init-template (Windows)
git clone https://github.com/gruntjs/grunt-init-gruntfile.git ~/.grunt-init/gruntfile // klont init-template (Linux)
grunt-init gruntfile // erstellt gruntfile


grunt // führt gruntfile.js aus (development)
grunt jshint// führt jshint
grunt deployment // führt deployment im Gruntfile aus


npm install grunt-contrib-jshint --save-dev //installiert package
