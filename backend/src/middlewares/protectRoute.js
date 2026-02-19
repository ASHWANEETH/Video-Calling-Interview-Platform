import { requireAuth } from "@clerk/express";
import { User } from "../models/User.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;
      if (!clerkId) {
        return res.status(401).json({ msg: "Unauthorized" });
      }

      const user = await User.findOne({ clerkId: clerkId });
      if (!user) {
        res.status(404).json({ msg: "User not found!" });
      }

      req.user = user;

      next();
    } catch (error) {
      console.error("Error in protectroute!");
      return res.status(500).json({ msg: "Internal server error" });
    }
  },
];
