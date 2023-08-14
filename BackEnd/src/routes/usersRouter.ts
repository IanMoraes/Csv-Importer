import express from "express";
import usersController from "../controllers/getUsersController";

const usersRouter = express.Router();
usersRouter.get("/", async (req, res) => {
  const queryParameter = req.query.q;
  if (typeof queryParameter === "string") {
    const data = await usersController(queryParameter);
    return res.status(200).json({ data });
  }
});

export default usersRouter;
