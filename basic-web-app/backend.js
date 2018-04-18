var express = require("express")
var getNearestCarparkTo = require("./carpark-helpers.js")
var axios = require("axios")


var app = express()

app.get('/', function (req, res) {
  getNearestCarparkTo(req.query.x, req.query.y).then(carpark => {
    var response = carpark
    res.set("Access-Control-Allow-Origin", "*")
    res.send(response)
  })
})

app.listen(3000, function () {})