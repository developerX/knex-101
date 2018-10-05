const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send(" I am the home page");
});

module.exports = router;