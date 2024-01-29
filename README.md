# Express Incidents API

Diese Express-Anwendung dient als einfache API zum Verwalten von Incidents. Sie ist derzeit gehostet auf Render unter der folgenden URL: [https://incidents-api.onrender.com](https://incidents-api.onrender.com).

## Funktionen

Die Anwendung bietet die folgenden Funktionen:

- **GET /incidents:** Abrufen der Liste aller Incidents.
- **POST /incidents:** Hinzufügen eines neuen Incidents.
- **DELETE /incidents/:id:** Löschen eines Incidents anhand seiner eindeutigen ID.

## Installation und Ausführung

Um diese Anwendung lokal auszuführen, folge diesen Schritten:

1. Stelle sicher, dass [Node.js](https://nodejs.org/) auf deinem Computer installiert ist.

2. Klonen dieses Repository oder kopiere den Anwendungscode in ein Verzeichnis deiner Wahl.

3. Navigiere im Terminal in das Verzeichnis der Anwendung.

4. Installiere die erforderlichen Abhängigkeiten, indem du den folgenden Befehl ausführst:

   ```bash
   npm install
5. Starte die Anwendung, indem du den folgenden Befehl ausführst:

   ```bash
   npm start
Die Anwendung wird auf http://localhost:3000 ausgeführt.

## Dummy-Daten

Die Anwendung wird mit einer einfachen Mock-Datenbank für Incidents initialisiert. Die Dummy-Daten sehen wie folgt aus:

```javascript
// Dummy-Daten für Incidents
const incidents = [
  {
    id: 1,
    isMajor: true,
    date: new Date("2024-01-23T08:00:00Z"),
  },
  {
    id: 2,
    isMajor: false,
    date: new Date("2024-01-23T10:30:00Z"),
  },
  {
    id: 3,
    isMajor: true,
    date: new Date("2024-01-23T15:45:00Z"),
  },
];

// - Jedes Incident-Objekt hat eine eindeutige ID, einen isMajor-Status und ein Datum.

