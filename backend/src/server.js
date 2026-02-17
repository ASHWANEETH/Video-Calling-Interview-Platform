import express from "express";
import path from "path";
import cors from cors;
import { serve } from "inngest/express";
import { inngest } from "./lib/inngest.js"

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

const app = express();

const __dirname = path.resolve();

//middlewares
app.use(express.json())
app.use(cors({origin: ENV.CLIENT_URL, credentials: true}))

app.use("/api/inngest",serve({client:inngest,}))

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "Hey there! its working fine" });
});

if (ENV.NODE_ENV == "prod") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

const startServer = async () => {
  try {
    if(!ENV.DB_URL){throw new Error("DB url not found!")}
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`Server running at port ${ENV.PORT}`);
    });
  } catch (error) {
    console.error("Error strating server!", err);
  }
};

startServer();
