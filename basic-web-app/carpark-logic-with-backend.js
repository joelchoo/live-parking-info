function addCarparkToPage([address, totalLots, availableLots]) {
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}

function searchXY(response) {
  var searchResult = response.data.results[0]

  var url = "http://localhost:3000"
  axios.get(url, {
    params: {
      x: searchResult.X,
      y: searchResult.Y
    }
  }).then(response => {
    addCarparkToPage(response.data)
  })
}

function searchLocation(location) {
  axios.get("https://developers.onemap.sg/commonapi/search", {
    params: {
      searchVal: location,
      returnGeom: "Y",
      getAddrDetails: "N"
    }
  }).then(searchXY)
}

var locationInput = document.getElementById("locationInput")

function handleKeydown(event) {
  if (event.key === "Enter") {
    var location = locationInput.value
    searchLocation(location)
  }
}

locationInput.addEventListener("keydown", handleKeydown)
