const express = require("express");
const fs = require("fs");

const app = express();

app.get("/logs", (_, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const txt = fs.readFileSync(
    "/tmp/qsr-debug.log",
    "utf8"
  );

  res.send(txt);
});

app.listen(9999);