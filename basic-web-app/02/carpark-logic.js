function addCarparkToPage(address, totalLots, availableLots) {
  var carparkAddress = document.getElementById("carparkAddress")
  carparkAddress.innerHTML = "Address: " + address

  var carparkTotalLots = document.getElementById("carparkTotalLots")
  carparkTotalLots.innerHTML = "Total Lots: " + totalLots

  var carparkAvailableLots = document.getElementById("carparkAvailableLots")
  carparkAvailableLots.innerHTML = "Available Lots: " + availableLots
}

addCarparkToPage("Blk 123 Bishan Avenue 456", 123, 12)