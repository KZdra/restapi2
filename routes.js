'use strict';
 module.exports = function (app) {
  var myJson = require('./controller');

    app.route('/')
    .get(myJson.index);
    app.route('/tampil')
    .get(myJson.tampil);
 }