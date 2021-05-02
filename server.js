const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const harrowData = require("./data/Harrow.json")
const heathrowData = require("./data/Heathrow.json")
const stratfordData = require("./data/Stratford.json")

// put 3 cities data together in a new array of object
const allData = {
    harrow: harrowData,
    heathrow: heathrowData,
    stratford: stratfordData
}

// root path
app.get("/", (req, res) => {
    res.status(200).send(allData)
})

// select city endpoint
app.get("/:city", (req, res) => {
    const selectedCity = req.params.city

    // selected city validation
    if (!allData[selectedCity]) {
        res.status(404).send({
            message: "City not found, select available city"
        })
    } else {
        res.status(200).send({
            citySelected: allData[selectedCity]
        })
    }
})

app.get("/:city/:category", (req, res) => {
    const selectedCity = req.params.city
    const selectedCategory = req.params.category

    // selected city validation
    if (!allData[selectedCity]) {
        res.status(404).send({
            message: "City not found, select available city"
        })
        // selected category validation
    } else if (!allData[selectedCity][selectedCategory]) {
        res.status(404).send({
            message: "Category not found, select available category"
        })
    } else {
        res.status(200).send({
            categorySelected: allData[selectedCity][selectedCategory]
        })
    }
})

app.listen(PORT, function() {
    console.log(`Port run in ${PORT}`)
})