import { Response } from "express-serve-static-core";
import createUsersService from "../services/Users/createUsersService";
import csvImporter from "../utils/csvImporter";

const sendFilesController = async (
  file: Express.Multer.File,
  res: Response<any, Record<string, any>, number>
) => {
  try {
    const users = await csvImporter(file);
    const createdUsers = await createUsersService(users);

    return res
      .status(200)
      .json({ data:createdUsers});
  } catch (error) {
    console.error("Error processing file:", error);
    return res
      .status(400)
      .json({ message: "CSV file wasn't imported, check your fields" });
  }
};

export default sendFilesController;
