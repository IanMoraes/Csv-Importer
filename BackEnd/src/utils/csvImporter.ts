import fs from "fs";
import csv from "csv-parser";
import User from "../models/User";

const csvImporter = (inputfile: Express.Multer.File): Promise<User[]> => {
  const data: User[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(inputfile.path)
      .pipe(csv())
      .on("data", (row) => {
        data.push(row);
      })
      .on("end", () => {
        resolve(data);
      })
      .on("error", (error) => {
        console.error("Error:", error.message);
        reject(error);
      });
  });
};

export default csvImporter;
