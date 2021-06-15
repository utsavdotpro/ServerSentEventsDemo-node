const app = require("express")();

app.get("/", (req, res) => res.send("Hello Server-Sent Event"));

app.listen(8080);

console.log("Listening on 8080");
