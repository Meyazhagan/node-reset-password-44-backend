const express = require("express");
const cors = require("cors");
const auth = require("./routes/auth");

const db = require("./shared/mongodb.connect");

const app = express();

db.connect();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url);
  next();
});
app.use("/user", auth);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening to Port ${port}`));
