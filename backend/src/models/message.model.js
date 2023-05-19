import { DataTypes } from "sequelize";
import database from "../config/db.js";
import User from "./user.model.js";

const sequelize = database.getInstance();

const Message = sequelize.define(
  "message",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "sender_id",
    },
    receiverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "receiver_id",
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "messages",
    timestamps: false,
  }
);

Message.belongsTo(User, {
  foreignKey: "senderId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Message.belongsTo(User, {
  foreignKey: "receiverId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default Message;
