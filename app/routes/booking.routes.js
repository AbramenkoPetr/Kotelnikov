module.exports = app => {
  const booking = require("../controllers/booking.controller.js");

  var router = require("express").Router();

  // Create a new Reserve
  router.post("/reserve", booking.reserve);

  

  app.use('/api/bookings', router);
};