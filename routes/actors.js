const env = 'development';
const config = require('../knexconfig.js')[env];
const express = require('express');
const router = express.Router();
const knex = require('knex')(config);

router.get('/', (request, response) => {
  knex('actors')
    .then( results => {
      response.json(results);
      knex.destroy();
    })
    .catch( err => {
      response.error(err);
      knex.destroy();
      process.exit(1);
    });
});

module.exports = router;