var express = require('express')
var fetch = require("node-fetch");

var app = express()


app.get('/', function (req, res) {

  var id = "bff0dc76686626eca31e1dcb18ecfe11"
  var url = "https://lvz9c27o80.execute-api.ap-southeast-1.amazonaws.com/v1/status?id=" + id

  function processResponse(response) {
    response.json().then(function(data) {
      var response = {
        time: data.timestamp,
        location: data.current_station.station
      }
      res.set("Access-Control-Allow-Origin", "*")
      res.send(response)
    })
  }

  fetch(url).then(processResponse)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})