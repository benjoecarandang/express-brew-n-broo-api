const mongoose = require("mongoose");
require('dotenv').config();
const app = require("./app");

mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", () => {
  console.error.bind(console, "MongoDB connection error:");
}).on("connected", () => {
  console.log("Connected in Mongoose DB");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on server port ${port}.`);
});
