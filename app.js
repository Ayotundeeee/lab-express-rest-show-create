const express = require('express');
const app = express();
const logsController = require('./controllers/logsController');
app.use(express.json())

// welcome message
app.get('/', (req, res) => {
    res.send("Welcome to the Captains Log App!!");
})

// create route to logs controller
app.use('/logs', logsController);

app.get('/logs/404', (req, res) => {
    res.status(404).json({ error: "404 Log not found"})
})

// handle errors when invalid/nonexistent route requested
app.get('*', (req, res) => {
    res.status(404).json({ error: "404 page not found" })
})

module.exports = app;