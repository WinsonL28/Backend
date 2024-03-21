const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.listen(3000, () => {
    console.log("The server is listening on port 3000")
})

app.get("/getWeatherForACityByName", (req, res) => {
    // fetch to get weather
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.cname}&appid=4473107e5274859b81ff8ce50888ebe5&units=metric`
    )
        .then((resp) => resp.json())
        .then((resp) => {
            console.log(resp)

            res.json(resp)
        })
        .catch((err) => {
            console.log(err)
        })
})