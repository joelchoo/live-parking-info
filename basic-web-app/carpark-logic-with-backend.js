function addCarparkToPage(address, totalLots, availableLots) {
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}

function getCarpark(coordinates) {
  var url = "http://localhost:3000"
  axios.get(url, {
    params: {
      x: coordinates.X,
      y: coordinates.Y
    }
  }).then(response => {
    var carpark = response.data
    addCarparkToPage(carpark.address, carpark.total_lots, carpark.lots_available)
  })
}

function getXY(location) {
  axios.get("https://developers.onemap.sg/commonapi/search", {
    params: {
      searchVal: location,
      returnGeom: "Y",
      getAddrDetails: "N"
    }
  }).then(response => {
    getCarpark(response.data.results[0])
  })
}

var locationInput = document.getElementById("locationInput")

function grabLocation(event) {
  if (event.key === "Enter") {
    var location = locationInput.value
    getXY(location)
  }
}

locationInput.addEventListener("keydown", grabLocation)

