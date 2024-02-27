import http from "http";
import { greet } from "./greet";

http
  .createServer((req, res: http.ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(greet("Bobae"));
    res.end();
  })
  .listen(8080);

console.log("Server running at port 8080");
