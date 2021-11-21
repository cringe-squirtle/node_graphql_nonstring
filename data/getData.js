import path from "path";
import fs from "fs";

export const getData = () => {
  const __dirname = path.resolve(path.dirname(""));
  const dataPath = path.join(__dirname, "/data/data.json");
  return JSON.parse(fs.readFileSync(dataPath, "utf8"));
};
