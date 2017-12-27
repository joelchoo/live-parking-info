var postcodeInput = document.getElementById("postcodeInput")

postcodeInput.addEventListener("keydown", function(event) {
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
  console.log(searchResult)
  addCarparkToPage("Blk 123 Bishan Avenue 456", 123, 12)
}

function addCarparkToPage(address, totalLots, availableLots) {
  var carparkAddress = document.getElementById("carparkAddress")
  var carparkTotalLots = document.getElementById("carparkTotalLots")
  var carparkAvailableLots = document.getElementById("carparkAvailableLots")

  var addressText = document.createTextNode("Address: " + address)
  var totalLotsText = document.createTextNode("Total Lots: " + totalLots)
  var availableLotsText = document.createTextNode("Available Lots: " + availableLots)

  carparkAddress.appendChild(addressText)
  carparkTotalLots.appendChild(totalLotsText)
  carparkAvailableLots.appendChild(availableLotsText)
}
