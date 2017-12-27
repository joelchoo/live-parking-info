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
  var carparkTotalLots = document.getElementById("carparkTotalLots")
  var carparkAvailableLots = document.getElementById("carparkAvailableLots")

  var addressText = document.createTextNode("Address: " + address)
  var totalLotsText = document.createTextNode("Total Lots: " + totalLots)
  var availableLotsText = document.createTextNode("Available Lots: " + availableLots)

  carparkAddress.appendChild(addressText)
  carparkTotalLots.appendChild(totalLotsText)
  carparkAvailableLots.appendChild(availableLotsText)
}
