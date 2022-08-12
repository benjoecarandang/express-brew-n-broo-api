const mongoose = require("mongoose");
const app = require("./app");

mongoose.connect(DB,
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

const port = 8000;

app.listen(port, () => {
  console.log(`Listening on server port ${port}.`);
});
