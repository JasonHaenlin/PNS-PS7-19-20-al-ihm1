const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const e = require('./editor');

const editor = express.Router();

editor.get('/editor', handleExceptions(e.viewEditor));

editor.post('/editor/save', handleExceptions(e.saveScript));

module.exports = editor;
