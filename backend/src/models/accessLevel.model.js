// accessLevel.js
import { DataTypes } from "sequelize";
import database from "../config/db.js";

const sequelize = database.getInstance();

const AccessLevel = sequelize.define(
  "access_level",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "access_levels",
    timestamps: false,
  }
);

export default AccessLevel;
