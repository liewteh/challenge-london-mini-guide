const express = require("express");
const cors = require("cors");
const harrowData = require("./data/Harrow");
const heathrowData = require("./data/Heathrow");
const stratfordData = require("./data/Stratford");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// put 3 cities data together in a new array of object
const allData = {
  harrow: harrowData,
  heathrow: heathrowData,
  stratford: stratfordData,
};

// root path
app.get("/", (req, res) => {
  res.status(200).send(allData);
});

// selected city endpoint
app.get("/:city", (req, res) => {
  const selectedCity = req.params.city;

  if (!allData[selectedCity]) {
    // selected city validation
    res.status(404).send({
      messages: "No such city",
    });
  } else {
    res.status(200).send({
      selectedData: allData[selectedCity],
    });
  }
});

// selected city and selected category endpoint
app.get("/:city/:category", (req, res) => {
  const selectedCity = req.params.city;
  const selectedCategory = req.params.category;

  if (!allData[selectedCity]) {
    // selected city validation
    res.status(404).send({
      messages: "Selected city ERROR",
    });
  } else if (!allData[selectedCity][selectedCategory]) {
    // selected city
    res.status(404).send({
      message: "No such category",
    });
  } else {
    res.status(200).send({
      selectedData: allData[selectedCity][selectedCategory],
    });
  }
});

// app.get("/harrow/", (req, res) => {
//     res.status(200).send(harrowData.nurse);
// })

// app.get("/harrow/pharmacies", (req, res) => {
//     res.status(200).send(harrowData.pharmacies);
// })

// app.get("/harrow/colleges", (req, res) => {
//     res.status(200).send({colleges: harrowData.colleges});
// })

// app.get("/harrow/doctors", (req, res) => {
//     res.status(200).send(harrowData.doctors);
// })

// app.get("/harrow/hospitals", (req, res) => {
//     res.status(200).send(harrowData.hospitals);
// })

app.listen(PORT, function () {
  console.log(`Port run on ${PORT}`);
});
