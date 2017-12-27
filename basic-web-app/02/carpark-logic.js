function addCarparkToPage() {
  var carparkAddress = document.getElementById("carparkAddress")
  var carparkTotalLots = document.getElementById("carparkTotalLots")
  var carparkAvailableLots = document.getElementById("carparkAvailableLots")

  var address = document.createTextNode("Address: Blk 123 Imaginary Road")
  var total_lots = document.createTextNode("Total Lots: 100")
  var lots_available = document.createTextNode("Available Lots: 23")

  carparkAddress.appendChild(address)
  carparkTotalLots.appendChild(total_lots)
  carparkAvailableLots.appendChild(lots_available)
}

addCarparkToPage()