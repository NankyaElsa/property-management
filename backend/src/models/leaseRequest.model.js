import { DataTypes } from "sequelize";
import database from "../config/db.js";
import Property from "./property.model.js";
import User from "./user.model.js";

const sequelize = database.getInstance();

const LeaseRequest = sequelize.define(
  "lease_request",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    propertyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "property_id",
    },
    tenantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "tenant_id",
    },
    landlordId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "landlord_id",
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
    status: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "lease_request",
    timestamps: false,
  }
);

LeaseRequest.belongsTo(Property, {
  foreignKey: "propertyId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

LeaseRequest.belongsTo(User, {
  foreignKey: "tenantId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

LeaseRequest.belongsTo(User, {
  foreignKey: "landlordId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default LeaseRequest;
