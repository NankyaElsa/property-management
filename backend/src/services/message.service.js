import { Message } from '../models/index.js';

class MessageService {
  async createMessage(senderId, receiverId, message, created, modified) {
    try {
      const messageObj = await Message.create({
        senderId,
        receiverId,
        message,
        created,
        modified
      });
      return messageObj;
    } catch (error) {
      throw new Error('Failed to create message.');
    }
  }

  async getMessageById(messageId) {
    try {
      const message = await Message.findByPk(messageId);
      return message;
    } catch (error) {
      throw new Error('Failed to retrieve message.');
    }
  }

  // Add more methods as needed
}

const messageService = new MessageService();
export default messageService;
