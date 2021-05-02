const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const harrowData = require("./data/Harrow.json")
const heathrowData = require("./data/Heathrow.json")
const stratfordData = require("./data/Stratford.json")

app.get("/harrow/", (req, res) => {
    res.status(200).send(harrowData.nurse);
})

app.get("/harrow/pharmacies", (req, res) => {
    res.status(200).send(harrowData.pharmacies);
})

app.get("/harrow/colleges", (req, res) => {
    res.status(200).send({colleges: harrowData.colleges});
})

app.get("/harrow/doctors", (req, res) => {
    res.status(200).send(harrowData.doctors);
})

app.get("/harrow/hospitals", (req, res) => {
    res.status(200).send(harrowData.hospitals);
})

app.listen(PORT, function() {
    console.log(`Port run in ${PORT}`)
})