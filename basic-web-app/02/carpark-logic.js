function addCarparkToPage(address, totalLots, availableLots) {
  var carparkAddress = document.getElementById("carparkAddress")
  carparkAddress.innerText = "Address: " + address

  var carparkTotalLots = document.getElementById("carparkTotalLots")
  carparkTotalLots.innerText = "Total Lots: " + totalLots

  var carparkAvailableLots = document.getElementById("carparkAvailableLots")
  carparkAvailableLots.innerText = "Available Lots: " + availableLots
}

addCarparkToPage("Blk 123 Bishan Avenue 456", 123, 12)