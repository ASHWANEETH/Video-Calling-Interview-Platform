import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    const streamToken = await chatClient.createToken(req.user.clerkId);
    res.status(200).json({
      streamToken,
      userId: req.user.clerkId,
      userName: req.user.name,
      userImage: req.user.profileImage,
      msg: "Token generated sucessfullly",
    });
  } catch (error) {
    res.status(500);
    console.error("Error generating stream token!");
  }
}
