function addCarparkToPage(address, totalLots, availableLots) {
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}

addCarparkToPage("Blk 123", "456", "78")