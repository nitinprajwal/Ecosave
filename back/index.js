import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "jcb",
    dateStrings: "date"
});

// Retrieve all events
app.get('/', (req, res) => {
    const sql = "SELECT * FROM events";
    db.query(sql, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error fetching events" });
        }
        return res.status(200).json(data);
    });
});

// Retrieve a single event by event_id
app.get('/getRecords/:event_id', (req, res) => {
    const eventId = req.params.event_id;
    const sql = "SELECT * FROM events WHERE event_id = ?";
    db.query(sql, [eventId], (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error fetching event details" });
        }
        if (data.length === 0) {
            return res.status(404).json({ error: "Event not found" });
        }
        return res.status(200).json(data);
    });
});

app.get('/event/:event_id', (req, res) => {
    const eventId = req.params.event_id;
    const sql = "SELECT * FROM events WHERE event_id = ?";
    db.query(sql, [eventId], (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error fetching event details" });
        }
        if (data.length === 0) {
            return res.status(404).json({ error: "Event not found" });
        }
        return res.json(data[0]);
    });
});

// Create a new event
app.post('/create_events', (req, res) => {
    const eventData = req.body;
    const sql = "INSERT INTO events SET ?";
    db.query(sql, eventData, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Error creating event" });
        }
        return res.status(201).json({ message: "Event created successfully" });
    });
});

// Update an existing event
app.put('/update_events/:event_id', (req, res) => {
    const eventId = req.params.event_id;
    const updatedEventData = req.body;
    const sql = "UPDATE events SET ? WHERE event_id = ?";
    db.query(sql, [updatedEventData, eventId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Error updating event" });
        }
        return res.status(200).json({ message: "Event updated successfully" });
    });
});

// Delete an event
app.delete('/delete_event/:event_id', (req, res) => {
    const eventId = req.params.event_id;
    const sql = "DELETE FROM events WHERE event_id = ?";
    db.query(sql, [eventId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Error deleting event" });
        }
        return res.status(200).json({ message: "Event deleted successfully" });
    });
});

app.listen(3030, () => {
    console.log("Server is running on port 3030");
});
