# Postleitzahlensuche mit HTML & jQuery

Dieses Skript zeigt eine mögliche Einbindung einer Postleitzahlen- und Ortssuche auf der eigenen Webseite ohne serverseitiger PHP/MySQL Programmierung. 

### Demo
> [Beispiel anzeigen](http://rawgit.com/plzTeam/web-snippets/master/plz-suche/index.html)

### PLZ Daten

Für die Suchabfrage wird eine Zuordnungsdatei im CSV-Format ([Dateiformat und Gliederung](http://blog.suche-postleitzahl.org/post/129292494671/plzort-zuordnungsdatei-verwenden)) mit aktuellen Postleitzahlen und Städte/Gemeinden von Deutschland verwendet. Eine aktuelle PLZ-Liste (zuordnung_plz_ort.csv) finden Sie [hier zum Downloaden](https://www.suche-postleitzahl.org/downloads)

Diese Datei wird in regelmäßigen Abständen aktualisiert und sollte nach dem Herunterladen in folgenden Ordner verschoben werden:

    |-- plz-suche
    |   |-- data
    |       |-- zuordnung_plz_ort.csv
    |   |-- ...

#### Datengröße & Pagespeed

Die verwendete CSV-Datei hat eine Größe von ~500kb/150kb(gzip) und wird in unserem Skript-Beispiel nur einmal beim Seitenaufruf geladen, d.h. nach der Sucheingabe sind keine Requests an den Server mehr nötig. Des Weiteren steht die CSV-Datei bei erneutem Seitenaufruf im Cache des Browsers ohne erforderliche Ladezeit zur Verfügung.

### Verwendeter CSV-Parser

Um die Datei zuordnung_plz_ort.csv ohne vorherige Konvertierung (z.B. in JSON) für diese PLZ-Suche nutzen zu können haben wir uns für [**Papa Parse**](http://papaparse.com/) entschieden - dieser CSV-Parser baut alleinig auf Javascript auf und benötigt kein jQuery.

### Anpassungen am Script vornehmen

Der Scriptbereich befindet sich ausschließlich in der **index.html**, dort können Sie gewünschte Änderungen am Code vornehmen.

#### Feedback & Anregungen

Wir würden uns sehr über Fragen und Rückmeldungen freuen 

> [**https://github.com/plzTeam/web-snippets/issues**](https://github.com/plzTeam/web-snippets/issues)

