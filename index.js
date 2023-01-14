const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const authSchema = require("./schema");

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.post("/user", async (req, res, next) => {
  try {
    const result = await authSchema.validateAsync(req.body);
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

app.listen(2000, () => {
  console.log("server started...!");
});
