import express from "express";
import sendFilesController from "../controllers/sendFilesController";
import upload from "../dependencies/multer";
const filesRouter = express.Router();

filesRouter.post("/", upload.single("file"), (req, res) => {
  if (req.file) {
    return sendFilesController(req.file, res);
  } else {
    return res
      .status(400)
      .json({ message: "CSV file wasn't imported, check your file" });
  }
});

export default filesRouter;
