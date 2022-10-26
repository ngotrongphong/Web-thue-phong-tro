import express from "express";
import { restart } from "nodemon";

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("ok");
});

export default router;
