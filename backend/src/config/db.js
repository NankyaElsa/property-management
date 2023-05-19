// db.js
import { Sequelize } from "sequelize";

class Database {
  constructor() {
    this.sequelize = null;
  }

  initialize() {
    this.sequelize = new Sequelize("property_management", "root", "", {
      host: "localhost",
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    });

    // try to connect to database and create tables if not exist
    this.sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
        this.sequelize.sync({ alter: true });
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      });
  }

  getInstance() {
    if (!this.sequelize) {
      this.initialize();
    }
    return this.sequelize;
  }
}

const database = new Database();
export default database;
