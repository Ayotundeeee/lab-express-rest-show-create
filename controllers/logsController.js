const express = require('express');
const logs = express.Router();
const logsArray = require('../models/logs');

// get all logs
logs.get('/', (req, res) => {
    res.json(logsArray);
})

// get logs by index
logs.get('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params;

    if(logsArray[arrayIndex]){
        res.status(200).json(logsArray[arrayIndex]);
    } else {
        res.status(404).json({ error: "404 Log not found" });
    }
})

// create new log and attach to end of logsArray
logs.post('/', (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
})

module.exports = logs;