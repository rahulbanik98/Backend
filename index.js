require("dotenv").config();
const express = require("express");

const app = express();
const PORT = 4500;
const { FIRST_PORT, SECOND_PORT, THIRD_PORT } = process.env;
app.get("/", (request, response) => {
  response.send("Hello 2024");
  console.log(process.env);
});

app.get("/twitter", (request, response) => {
  response.send("twitter 2024");
});

app.listen(PORT, () => {
  console.log(`server created at POST ${SECOND_PORT}`);
});
