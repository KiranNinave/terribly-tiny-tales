const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// frequncy counter
const frequncyCounter = require("./utils/frequency-counter");

// routes
const routes = require("./routes");

// express app
const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan("dev"));
app.use(cors());

// router
app.use("/", routes);

// starting server
frequncyCounter
  .createInstance("https://terriblytinytales.com/test.txt")
  .then(() => {
    app.listen(PORT, () => {
      console.log("server started on", PORT);
    });
  })
  .catch(err => {
    console.log(err);
  });
