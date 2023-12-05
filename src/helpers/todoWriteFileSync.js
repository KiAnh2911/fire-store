import fs from "fs";

export default function todoWriteFileSync(data) {
  return fs.writeFileSync("./lib/database/todos.json", JSON.stringify(data));
}
