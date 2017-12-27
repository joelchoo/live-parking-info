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
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}
