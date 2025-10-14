module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "1312",
  DB: "reserves_db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};