function addCarparkToPage([address, totalLots, availableLots]) {
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}

var locationInput = document.getElementById("locationInput")

function handleKeydown(event) {
  if (event.key === "Enter") {
    addCarparkToPage([locationInput.value, "123", "12"])
  }
}

locationInput.addEventListener("keydown", handleKeydown)
