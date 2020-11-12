const express = require("express");
const app = express();
const cors = require("cors");
const jsonParser = express.json();
const { PORT } = require("./config/constants");
const storyRouter = require("./router/story");

app.use(cors());
app.use(jsonParser);
app.use("/story", storyRouter);
app.listen(PORT, () => console.log("Listening to port", PORT));
