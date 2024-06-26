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
        res.redirect('/logs/404');
    }
})

// create new log and attach to end of logsArray
logs.post('/', (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
})

// delete log at index
logs.delete('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params;
    if(logsArray[arrayIndex]) {
        removedLog = logsArray.splice(arrayIndex, 1);
        res.status(200).json(removedLog);
    } else {
        res.redirect('/logs/404');
    }
})

// update log at index
logs.put('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params;
    logsArray[arrayIndex] = req.body
    res.status(200).json(logsArray[arrayIndex]);
    
})



module.exports = logs;