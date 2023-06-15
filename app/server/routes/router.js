const express = require('express');

const route = express.Router();

const services = require("../services/render");



/**
 * @description Root Route
 * @method GET /
 */


route.get('/', services.homeRoutes);

/**
 * @description add notes
 * @method GET /add-note
 */


route.get('/add-note', services.add_note);


/**
 * @description  edit notes
 * @method GET /edit-note
 */

route.get('/edit-note', services.edit_note );

/**
 * @description  saved notes
 * @method GET /saved-note
 */

route.get('/saved-note', services.saved_note);


module.exports = route