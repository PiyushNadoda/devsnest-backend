const { Sequelize } = require("sequelize");
const {
  sequelize_databse,
  sequelize_dialect,
  sequelize_host,
  sequelize_password,
  sequelize_username,
} = require("../config/index");
const sequelize = new Sequelize(
  sequelize_databse,
  sequelize_username,
  sequelize_password,
  {
    host: sequelize_host,
    dialect: sequelize_dialect,
  }
);

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established with DB");
  } catch (err) {
    console.error("unable to connect to DB");
  }
})();

module.exports = sequelize;
