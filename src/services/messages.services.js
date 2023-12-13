import { messagesManager } from "../DAO/mongodb/managers/messagesManager.js";

export const findAll = async () => {
    try {
        const messages = await messagesManager.findAll();
        return messages; 
    } catch (error) {
        throw new Error("Error finding messages");
    }
};

export const createOne = async (messageData) => {
    const { username, message } = messageData; 
    if (!message) {
        throw new Error("Required data is missing");
    }
    try {
        const newMessage = await messagesManager.createOne(messageData);
        return newMessage; 
    } catch (error) {
        throw new Error("Error creating messages");
    }
};
