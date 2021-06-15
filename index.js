const app = require("express")();

app.get("/", (req, res) => res.send("Hello Server-Sent Event"));

app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "text/even-stream");
  send(res);
});

app.listen(8080);

console.log("Listening on 8080");

let i = 0;

function send(res) {
  res.write("data: " + `This is response #${++i}!\n\n`);
  setTimeout(() => send(res), 1000);
}
