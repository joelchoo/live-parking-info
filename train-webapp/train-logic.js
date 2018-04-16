let id = "bff0dc76686626eca31e1dcb18ecfe11"
let url = "https://lvz9c27o80.execute-api.ap-southeast-1.amazonaws.com/v1/status?id=" + id

fetch(url).then(processData)

function processData(response) {
  if (response.status === 200) {
    response.json().then(function(data) {
      addTrainInfoToPage(data.timestamp, data.current_station.station)
    })
  }
}

function addTrainInfoToPage(time, location) {
  document.getElementById("train-time").innerText = "Last Updated: " + time
  document.getElementById("train-location").innerText = "Current Location: " + location
}

// Basic frontend development
  // HTML, JS, CSS

// Basic backend
  // Local file server
  // Deploying to bitbucket
  // Writing their own API?

// Data concepts
  // APIs
  // Open data?