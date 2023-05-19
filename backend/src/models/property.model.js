import { DataTypes } from "sequelize";
import database from "../config/db.js";
import User from "./user.model.js";

const sequelize = database.getInstance();

const Property = sequelize.define(
  "property",
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
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    availableRooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "available_rooms",
    },
    numberOfBathrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "number_of_bathrooms",
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    type: {
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
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "owner_id",
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: "properties",
    timestamps: false,
  }
);

Property.belongsTo(User, {
  foreignKey: "ownerId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default Property;
