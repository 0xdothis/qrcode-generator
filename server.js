const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;

    fs.readFile("./index.html", (err, data) => {
      if (err) {
        res.setHeader("Content-Type", "text/plain");
        res.statusCode = 400;
        res.write("Internal error");
        return res.end();
      }

      res.write(data);
      res.end();
    });
  }
});

server.listen(3000);
