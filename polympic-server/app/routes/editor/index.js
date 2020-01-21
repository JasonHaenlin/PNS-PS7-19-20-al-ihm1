const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const e = require('./editor');

const editor = express.Router();

editor.get('/', handleExceptions(e.viewEditor));

editor.post('/save', handleExceptions(e.saveScript));
editor.post('/preview', handleExceptions(e.savePreview));
editor.post('/compile', handleExceptions(e.compile));

module.exports = editor;
