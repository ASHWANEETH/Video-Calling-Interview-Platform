import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    const streamToken = chatClient.createToken(req.user.clerkId);
    res.status(200).json({
      streamToken,
      userId: req.user.clerkId,
      userName: req.user.name,
      userImage: req.user.profileImage,
    });
  } catch (error) {
    res.status(500).json({ msg: "Error generating stream token!" });
    console.error("Error generating stream token!", error);
  }
}
