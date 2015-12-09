# Postleitzahlensuche mit HTML & jQuery

Dieses Skript zeigt eine mögliche Einbindung einer Postleitzahlen- und Ortssuche ohne serverseitiger Programmierung. 

### Demo
> [Beispiel anzeigen](http://rawgit.com/plzTeam/web-snippets/master/plz-suche/index.html)

### PLZ Daten

Für die Suchabfrage wird eine Zuordnungsdatei im CSV-Format mit aktuellen Postleitzahlen und Orten/Gemeinden von Deutschland verwendet. Die Aktuelle Zuordnungsdatei (zuordnung_plz_ort.csv) finden sie [hier zum Downloaden](http://www.suche-postleitzahl.org/downloads)

#### Datengröße & Pagespeed

Die benötigte CSV-Datei hat eine Größe von ~500kb/150kb(gzip) und wird in unserem Skript-Beispiel nur einmal beim Seitenaufruf geladen, d.h. bei der PLZ-Suche sind keine Requests an den Server mehr nötig. Bei erneutem Seitenaufruf steht die CSV-Datei im Cache des Browsers, ohne erforderliche Ladezeit, zur Verfügung. 
