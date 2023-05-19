import Joi from "joi";

const accessLevelSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
});

const userSchema = Joi.object({
  accessLevelId: Joi.number().integer().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  zip: Joi.string().required(),
});

const propertySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  availableRooms: Joi.number().integer().required(),
  numberOfBathrooms: Joi.number().integer().required(),
  address: Joi.string().required(),
  image: Joi.string().required(),
  type: Joi.string().required(),
  ownerId: Joi.number().integer().required(),
  city: Joi.string().required(),
  approved: Joi.boolean().required(),
});

const leaseRequestSchema = Joi.object({
  propertyId: Joi.number().integer().required(),
  tenantId: Joi.number().integer().required(),
  landlordId: Joi.number().integer().required(),
  status: Joi.string().required(),
});

const messageSchema = Joi.object({
  senderId: Joi.number().integer().required(),
  receiverId: Joi.number().integer().required(),
  message: Joi.string().required(),
});

export {
  accessLevelSchema,
  userSchema,
  propertySchema,
  leaseRequestSchema,
  messageSchema,
};
