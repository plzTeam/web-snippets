## Interaktive PLZ Karte in HTML5 & jQuery

Mit diesem Skript-Beispiel können Sie interaktive Postleitzahlenkarten, inklusive Suchergebnis des ausgewählten PLZ-Gebiets, in Ihre Webseite einbinden. Für die Umsetzung wird keine serverseitige Programmiereung benötigt.

### Demo
> [Beispiel anzeigen](http://rawgit.com/plzTeam/web-snippets/master/plz-karte/index.html)

[![Interaktive PLZ Karte](https://raw.githubusercontent.com/plzTeam/web-snippets/master/plz-karte/screenshot.png)](http://rawgit.com/plzTeam/web-snippets/master/plz-karte/index.html "Interaktive PLZ Karte")

### Datenquelle & Format der verwendeten PLZ-Karten

Die im Codebeispiel verwendeten Karten sind im [SVG-Format](https://de.wikipedia.org/wiki/Scalable_Vector_Graphics "Wikipedia") und können nach Ihren Wünschen ausgetauscht werden. Eine große Auswahl finden Sie auf allen Ortsseiten von [suche-postleitzahl.org](http://www.suche-postleitzahl.org) über den Button "Verfügbare Downloads" - Die Rohdaten stammen von **OpenStreetMap** und können unter Einhaltung der [Lizenz](http://www.openstreetmap.org/copyright) frei genutzt werden.

#### SVG Karten hinzufügen

Nachdem Sie in unserem PLZ-Verzeichnis Ihre gewünschten SVG-Karten heruntergeladen haben [[Anleitung](http://blog.suche-postleitzahl.org/post/131701081621/umfangreiche-daten-zur-individuellen)], können Sie diese ggf. umbenennen und in folgenden Ordner verschieben:

    |-- plz-karte
      |-- maps
        |-- sachsen.svg
        |-- berlin.svg
      |-- ...
      
Danach müssen Sie die hinzugefügten PLZ-Karten dem Skript bekanntgeben, dazu öffnen Sie die Datei **index.html** und scrollen zum Scriptbereich:

```js
var _maps = [
    {
        url:    './maps/sachsen.svg',
        name:   'Sachsen'
    },
    {
        url:    './maps/berlin.svg',
        name:   'Berlin'
    }
];
```
Dort fügen Sie der Array-Liste Ihre Karten hinzu. Die Liste wird der Reihenfolge nach in das Kartenauswahlmenü geladen - **_name_** entspricht der Linkbezeichnung im Menü und über den Parameter **_url_** wird nach Menüauswahl die angegebene SVG-Karte geladen. Das erste Objekt in der Kartenliste wird direkt beim Anwendungsstart geladen.

### Suchergebnisliste

Die Ergebnisliste wird nach einem Klick auf eines der Posleitzahlengebiete angezeigt bzw. aktualisiert. Dieser Bereich wurde, mit kleiner Modifikation, aus dem schon vorhandenen [PLZ-Suche Snippet](https://github.com/plzTeam/web-snippets/tree/master/plz-suche) entnommen.


#### Feedback & Anregungen

Wir würden uns sehr über Fragen und Rückmeldungen freuen

> https://github.com/plzTeam/web-snippets/issues
