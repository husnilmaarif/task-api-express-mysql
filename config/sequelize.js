const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "eduwork-crud-v2",
  host: "localhost",
  username: "root",
  password: "",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("connection succesfully");
  } catch (error) {
    console.log("connection error: ", error);
  }
})();

module.exports = sequelize;
