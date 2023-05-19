import { DataTypes } from "sequelize";
import database from "../config/db.js";
import AccessLevel from "./accessLevel.model.js";

const sequelize = database.getInstance();

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    accessLevelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "access_level_id",
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "first_name",
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "last_name",
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    zip: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

User.belongsTo(AccessLevel, {
  foreignKey: "accessLevelId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default User;
