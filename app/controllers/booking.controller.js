const db = require("../models");
const Bookings = db.bookings;
const Events = db.events;
const Op = db.Sequelize.Op;

// Create and Save a new Booking
exports.reserve = (req, res) => {
// Validate request
  Events.findOne({ where: { id:  req.body.event_id }  })
     .then(data => {
      //console.log('Events.findOne() data ', data, 'id ', req.body.event_id);
      if(data == null) Events.create({name: 'evet1', total_seats: 100})
    })
  if (!req.body.user_id || !req.body.event_id ) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    
    return;
  }
//console.log(req.body)


Bookings.findAll({ where: { event_id:  req.body.event_id , user_id: req.body.user_id }  })
    .then(data => {
      //console.log('Bookings.findOne(bookings) data ', data);
      if(data != null) if(data.length != 0) { 
        res.status(400).send({
          message: "Re-register for a user's: "+ req.body.user_id+ " event!"
        });
        //console.log('Bookings.findOne(bookings) return ');
        return;
      }

      // Create a Reserve
  const  bookings = {
    
    event_id: req.body.event_id,
    user_id: req.body.user_id,
    
  };

  //console.log('Bookings.create(bookings) data ', bookings);

  // Save Reserve in the database
  Bookings.create(bookings)
    .then(data => {
      //console.log('Bookings.create(bookings) data ', data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Reserve."
      });
    });


      
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookings."
      });
    });


  
};

