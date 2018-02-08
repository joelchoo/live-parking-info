function addCarparkToPage(address, totalLots, availableLots) {
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}

var postcodeInput = document.getElementById("postcodeInput")

function handleKeydown(event) {
  if (event.key === "Enter") {
    addCarparkToPage(postcodeInput.value, "123", "12")
  }
}

postcodeInput.addEventListener("keydown", handleKeydown)
