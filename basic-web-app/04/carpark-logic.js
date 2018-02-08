function addCarparkToPage(address, totalLots, availableLots) {
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}

function searchXY(response) {
  var searchResult = response.data.results[0]
  addCarparkToPage("Blk 123 Bishan Avenue 456", searchResult.X, searchResult.Y)
}

function searchPostcode(postcode) {
  axios.get("https://developers.onemap.sg/commonapi/search", {
    params: {
      searchVal: postcode,
      returnGeom: "Y",
      getAddrDetails: "N"
    }
  }).then(searchXY)
}

var postcodeInput = document.getElementById("postcodeInput")

function handleKeydown(event) {
  if (event.key === "Enter") {
    var postcode = postcodeInput.value
    searchPostcode(postcode)
  }
}

postcodeInput.addEventListener("keydown", handleKeydown)