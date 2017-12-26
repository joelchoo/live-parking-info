var postcodeInput = document.getElementById("postcodeInput")

postcodeInput.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    var postcode = postcodeInput.value
    searchPostcode(postcode)
  }
})

function searchPostcode(postcode) {
  axios.get("https://developers.onemap.sg/commonapi/search", {
    params: {
      searchVal: postcode,
      returnGeom: "Y",
      getAddrDetails: "N"
    }
  }).then(searchXY)
}

function searchXY(response) {
  var searchResult = response.data.results[0]
  getNearestCarparkTo(searchResult.X, searchResult.Y).then(addCarparkToPage)
}

function addCarparkToPage(carpark) {
  var carparkAddress = document.getElementById("carparkAddress")
  var carparkTotalLots = document.getElementById("carparkTotalLots")
  var carparkAvailableLots = document.getElementById("carparkAvailableLots")

  var address = document.createTextNode("Address: " + carpark.address)
  var total_lots = document.createTextNode("Total Lots: " + carpark.total_lots)
  var lots_available = document.createTextNode("Lots Available: " + carpark.lots_available)

  carparkAddress.appendChild(address)
  carparkTotalLots.appendChild(total_lots)
  carparkAvailableLots.appendChild(lots_available)
}