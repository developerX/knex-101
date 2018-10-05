const express = require('express');
const app = express();
const port = 3333;

/**
 * Routes
 */

 const indexRoutes = require('./routes/index');
 const actorRoutes = require('./routes/actors');
 const awardRoutes = require('./routes/awards');
 const plotRoutes = require('./routes/plots');
 const movieRoutes = require('./routes/movies');


 /**
  * Set up Routes
  */

  app.use('/', indexRoutes);
  app.use('/actors', actorRoutes);
  app.use('/awards', awardRoutes);
  app.use('/plots', plotRoutes);
  app.use('/movies', movieRoutes);

  /**
   * Open up port for application to be accessed
   */

   app.listen(port, console.log(`I am running on http://localhost:${port}`));

