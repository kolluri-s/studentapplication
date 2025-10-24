const express = require("express");
const cors = require("cors");
require("../backend/src/db/connection");
const app = express();
const port = process.env.PORT || 8000;
const studentrouter = require("../backend/src/routers/routing");

app.use(cors());
app.use(express.json());
app.use(studentrouter);

app.listen(port, () => {
  console.log(`Connection successful at port ${port}`);
});
