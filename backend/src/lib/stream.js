import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_SECRET_KEY;

if (!apiKey || !apiSecret) {
  throw new Error("Stream API key and secret key not found!");
}

export const streamClient = new StreamClient(apiKey,apiSecret);//vid call
export const chatClient = StreamChat.getInstance(apiKey, apiSecret);//chat

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log("User upsert sucessful!");
  } catch (error) {
    console.error("Error upserting stream user : ", error);
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
    console.log("User deleted sucess! ", userId);
  } catch (error) {
    console.error("Error deleting stream user: ", error);
  }
};
