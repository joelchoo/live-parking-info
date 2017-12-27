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
  carparkAddress.innerHTML = "Address: " + address

  var carparkTotalLots = document.getElementById("carparkTotalLots")
  carparkTotalLots.innerHTML = "Total Lots: " + totalLots

  var carparkAvailableLots = document.getElementById("carparkAvailableLots")
  carparkAvailableLots.innerHTML = "Available Lots: " + availableLots
}
