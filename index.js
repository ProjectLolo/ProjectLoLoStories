const express = require("express");
const app = express();
const cors = require("cors");
const jsonParser = express.json();
const { PORT } = require("./config/constants");

app.use(cors());
app.use(jsonParser);

app.listen(PORT, () => console.log("Listening to port", PORT));
