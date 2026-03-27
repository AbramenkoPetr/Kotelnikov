//const Event = require ("./event.model.js");
module.exports = (sequelize, Sequelize) => {
  
  const Event = sequelize.define("events", {
    id: {
      type: Sequelize.INTEGER, primaryKey: true,  autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    total_seats: {
      type: Sequelize.INTEGER
    }
    //tableName: 'events',

  });

  const Booking = sequelize.define("bookings", {
    id: {
      type: Sequelize.INTEGER, primaryKey: true,  autoIncrement: true
    },
    event_id: {
      type: Sequelize.INTEGER, references: { model: Event, key: 'id' }
    },
    user_id: {
      type: Sequelize.STRING
    },
    created_at: { 
      type: "TIMESTAMP", defaultValue: sequelize.literal("CURRENT_TIMESTAMP"), 
      allowNull: false 
    },
    //timestamps: false,
  });

  return Booking;
};