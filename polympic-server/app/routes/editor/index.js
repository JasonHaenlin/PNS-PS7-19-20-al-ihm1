const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const e = require('./editor');

const editor = express.Router();


/**
 * @api {get} /editor
 * @apiName GetEditor
 * @apiGroup Editor
 * @apiParam {string} id query params to retrieve the editor page
 */
editor.get('/', handleExceptions(e.viewEditor));

/**
 * @api {post} /editor/save
 * @apiName PostSaveCode
 * @apiGroup Editor
 * @apiExample {curl} Example usage:
 *     curl -d '{"file":"events.script","code":"concerning preferences\ndisplay"}'
 *            -H "Content-Type: application/json" -X POST http://localhost:3000/editor/save
 * @apiSuccess (200) {json} Tickets submit
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *                  "ok"
 * @apiError (400) {json} Bad Request
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *    {
 *        "code": 400,
 *        "message": "Something went wrong"
 *    }
 */
editor.post('/save', handleExceptions(e.saveScript));

/**
 * @api {post} /editor/preview
 * @apiName PostPreviewCode
 * @apiGroup Editor
 * @apiExample {curl} Example usage:
 *     curl -d '{"code":"concerning preferences\ndisplay","file":"events.script"}'
 *            -H "Content-Type: application/json" -X POST http://localhost:3000/editor/preview
 * @apiSuccess (200) {json} Tickets submit
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *                  "ok"
 * @apiError (400) {json} Bad Request
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *    {
 *        "code": 400,
 *        "message": "Something went wrong"
 *    }
 */
editor.post('/preview', handleExceptions(e.savePreview));

/**
 * @api {post} /editor/compile
 * @apiName PostCompileCode
 * @apiGroup Editor
 * @apiExample {curl} Example usage:
 *     curl -d '{"code":"concerning preferences\ndisplay"}'
 *            -H "Content-Type: application/json" -X POST http://localhost:3000/editor/compile
 * @apiSuccess (200) {json} Tickets submit
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *               {
 *                "compiledCode":"function run(array, user_prefs) {
 *                  \n    let output = [];
 *                  \n for (const event_in_pref of lib.getEventsMatchingUserPreferences(array, user_prefs))
 *                   {
 *                  \n  lib.addElementToDisplay(output, event_in_pref);\n
 *                  }
 *               \n  return output;\n};\nmodule.exports = { run };\n"
 *               }
 * @apiError (500) {json} Interval serveur error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Failed
 *    {
 *        "code": 500,
 *        "error": "Failed"
 *    }
 */
editor.post('/compile', handleExceptions(e.compile));

module.exports = editor;
