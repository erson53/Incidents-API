const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware zur Verarbeitung von JSON-Anfragen
app.use(bodyParser.json());

// Mock-Datenbank für Incidents
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
let nextIncidentId = 1;

// GET-Anfrage, um alle Incidents abzurufen
app.get("/incidents", (req, res) => {
  res.json(incidents);
});

// POST-Anfrage, um ein neues Incident hinzuzufügen
app.post("/incidents", (req, res) => {
  const { isMajor } = req.body;
  const newIncident = {
    id: nextIncidentId++,
    isMajor,
    date: new Date(),
  };
  incidents.push(newIncident);
  res.status(201).json(newIncident);
});

// DELETE-Anfrage, um ein Incident anhand seiner ID zu löschen
app.delete("/incidents/:id", (req, res) => {
  const incidentId = parseInt(req.params.id);
  const index = incidents.findIndex((incident) => incident.id === incidentId);
  if (index !== -1) {
    incidents.splice(index, 1);
    res.sendStatus(204); // Erfolgreich gelöscht
  } else {
    res.status(404).json({ message: "Incident nicht gefunden" });
  }
});

app.listen(port, () => {
  console.log(`Die API läuft auf http://localhost:${port}`);
});
