var postcodeInput = document.getElementById("postcodeInput")

postcodeInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    var postcode = postcodeInput.value
    console.log(postcode)
    addCarparkToPage("Blk 123 Bishan Avenue 456", 123, 12)
  }
})

function addCarparkToPage(address, totalLots, availableLots) {
  var carparkAddress = document.getElementById("carparkAddress")
  carparkAddress.innerHTML = "Address: " + address

  var carparkTotalLots = document.getElementById("carparkTotalLots")
  carparkTotalLots.innerHTML = "Total Lots: " + totalLots

  var carparkAvailableLots = document.getElementById("carparkAvailableLots")
  carparkAvailableLots.innerHTML = "Available Lots: " + availableLots
}
