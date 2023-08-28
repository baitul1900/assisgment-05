// topic 01
const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("This is Home Page");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("This is About Page");
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("This is Contact Page");
    res.end();
  } else if (req.url === "/file-write") {
    fs.writeFile("file.txt", "Hello World", (err) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write('Hello World');
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
