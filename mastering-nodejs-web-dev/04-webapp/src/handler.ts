import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs";

export const handler = (req: IncomingMessage, res: ServerResponse) => {
  readFile("data.json", (err: Error | null, data: Buffer) => {
    if (err == null) {
      res.end(data, () => console.log("File sent"));
    } else {
      console.log(`Error: ${err.message}`);
      res.statusCode = 500;
      res.end();
    }
  });
};
