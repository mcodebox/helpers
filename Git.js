#############################################################
## Git
git config --global user.name "[name]"
git config --global user.email "[email address]"
git config --global color.ui auto

git init // erstellt git repository
echo "To-do list web app, organize and share your to-do's" > README.md // erstellt ReadMe
git add myFile.txt // fügt Datei zu git "staging area" hinzu (auch mehrere)
git add . // fügt alle Dateien zu staging area hinzu
git commit -m "Initial Project Commit" // speichert alles als commit
git status // Zeigt den aktuellen Status an
git diff // zeigt Unterschied zwischen working directory und Staging Area
git commit -a -m "Initial project files + HTML Markup" // -a committed alle Dateien
git log // zeigt alle commits
git checkout 4ea35 // bringt einen zu einem bestimmten Commit zurück (ertse 5 Zeichen reichen)
git checkout master // zum production branch

//Branching
git branch feature_x // erstellt neuen branch feature_x
git checkout feature_x // wechselt zu branch feature_x
echo "function(){...}" > script.js
git commit -a -m "Function x done"
git branch // zeigt Liste von branches
git branch -v // zeigt Liste von branches mit Version

git checkout master
git merge feature_x // merged den branch "feature_x" mit aktuell ausgewähltem

/*
git status
// dann Conflicts in der Master Datei editieren
git add .
git commit -m "commit comment"
*/

git mergetool // bei Konfliketen mergetool aufrufen
git reset --merge // bricht merge ab
git add filename.txt //nachdem merge bereinigt ist
git commit -m "merged" //nachdem merge bereinigt ist

git config // git Konfiguration

//GitHub nutzen
git remote add origin https://github.com/mcodebox/proj1.git // git repo zu online adden
git remote set-url origin https://github.com/mcodebox/proj1.git // git online repo url ändern
git push -u origin master // pusht repo auf GitHub
git pull https://github.com/mcodebox/proj1.git master // pullt den master branch von github
git push -f origin master // force push auf GitHub
git push origin master // erster push (wenn remote repo noch leer)

git fetch <remote> // download all changes from remote without intergrating into HEAD
git pull <remote> <branch> // download all changes from remote and directly merge into HEAD

git branch -d branch_name // delete local branch
