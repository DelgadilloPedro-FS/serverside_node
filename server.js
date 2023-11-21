const http = require("http");

const todos = [
  {
    id: 1,
    task: "task one",
  },
  {
    id: 2,
    task: "task two",
  },
  {
    id: 3,
    task: "task three",
  },
];

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({ success: true, method: req.method, data: todos }));
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
