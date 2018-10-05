const env = 'development';
const express = require('express');
const router = express.Router();
const config = require('../knexconfig.js')[env];
const knex = require('knex')(config);

router.get('/', (request, response) => {
  knex('awards')
    .then(results => {
      response.json(results);
      knex.destroy();
    })
    .catch(err => {
      response.error(err)
      knex.destroy();
      process.exit(1);
    });
});

module.exports = router;