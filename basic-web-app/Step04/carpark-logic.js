function addCarparkToPage(address, totalLots, availableLots) {
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}

function getCarpark(coordinates) {
  // X and Y -> Carpark
  addCarparkToPage("nearest carpark to XY", "456", "78")
}

function getXY(location) {
  // location -> X and Y
  axios.get("https://developers.onemap.sg/commonapi/search", {
    params: {
      searchVal: location,
      returnGeom: "Y",
      getAddrDetails: "N"
    }
  }).then(response => {
    console.log(response)
    var coordinates = response.data.results[0]
    console.log(coordinates)
    getCarpark(coordinates)
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