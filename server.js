const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/hacker") && req.method === "GET") {
    const js = fs.readFileSync("./hacker.js");

    res.setHeader("Content-Type", "text/javascript");
    res.statusCode = 200;
    return res.end(js);
  }
  const html = fs.readFileSync("./index.html", "utf-8");

  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  return res.end(html);
});

server.listen(5000, () => console.log("server is running"));
