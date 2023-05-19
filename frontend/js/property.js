import api from "./api.js";

/*
"id": 1,
"name": "Property 1",
"description": "Description for Property 1",
"price": "1000.00",
"availableRooms": 3,
"numberOfBathrooms": 2,
"address": "123 Property St",
"image": "property1.jpg",
"type": "Apartment",
"created": "2023-05-18T10:48:02.000Z",
"modified": "2023-05-18T10:48:02.000Z",
"ownerId": 2,
"city": "City",
"approved": true


*/

export default class Property {
  constructor(property) {
    this.id = property.id;
    this.name = property.name;
    this.description = property.description;
    this.price = property.price;
    this.availableRooms = property.availableRooms;
    this.numberOfBathrooms = property.numberOfBathrooms;
    this.address = property.address;
    this.image = property.image;
    this.type = property.type;
    this.createdAt = property.createdAt;
    this.updatedAt = property.updatedAt;
    this.ownerId = property.ownerId;
    this.city = property.city;
    this.approved = property.approved;
  }

  async create() {
    const data = {
      name: this.name,
      description: this.description,
      price: this.price,
      image: this.image,
      type: this.type,
      ownerId: this.ownerId,
      city: this.city,
      approved: this.approved,
    };

    const response = await api.create("properties", data);

    if (response.error) {
      return response;
    }

    this.id = response.id;
    this.seller = response.seller;
    this.createdAt = response.createdAt;
    this.updatedAt = response.updatedAt;

    return this;
  }

  async update() {
    const data = {
      name: this.name,
      description: this.description,
      location: this.location,
      price: this.price,
      imageUrl: this.imageUrl,
    };

    const response = await api.update("properties", this.id, data);

    this.updatedAt = response.updatedAt;

    return this;
  }

  async delete() {
    await api.delete("properties", this.id);
  }

  static async find(id) {
    const response = await api.read("properties", id);

    return new Property(response);
  }

  static async findAll() {
    const response = await api.read("properties");

    return response.map((property) => new Property(property));
  }
}
