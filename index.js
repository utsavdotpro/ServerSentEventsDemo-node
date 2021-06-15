const app = require("express")();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("Hello Server-Sent Event"));

app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "text/even-stream");
  send(res);
});

app.listen(port);

console.log(`Listening on ${port}`);

let i = 0;

function send(res) {
  res.write("data: " + `This is response #${++i}!\n\n`);
  setTimeout(() => send(res), 1000);
}
