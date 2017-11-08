// Helper functions
async function getCarparkList() {
  var carparkStaticInfo = await getCarparkStaticInfo()
  var carparkAvailability = await getCarparkAvailability()
  var combined = combineCarparkData(carparkAvailability, carparkStaticInfo)
  return combined
}

async function getCarparkStaticInfo() {
  return await axios.get("https://data.gov.sg/api/action/datastore_search", {
    params: {
      resource_id: "139a3035-e624-4f56-b63f-89ae28d4ae4c",
      limit: 2074
    }
  }).then(response => {
    var carparks = response.data.result.records
    return carparks
  })
}

async function getCarparkAvailability() {
  return await axios.get("https://api.data.gov.sg/v1/transport/carpark-availability", {
    headers: {
      "api-key": "YOUR_API_KEY"
    }
  }).then(response => {
    var carparkAvailability = response.data.items[0].carpark_data
    return carparkAvailability
  })
}

function distanceFromXY(carpark, x, y) {
  var x2 = Math.pow((parseFloat(carpark.x_coord) - x), 2)
  var y2 = Math.pow((parseFloat(carpark.y_coord) - y), 2)
  return Math.sqrt(x2 + y2)
}

function sortCarparksByDistance(carparks) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // See the compareNumbers function
  function compareCarparksByDistance(carpark1, carpark2) {
    return carpark1.distance - carpark2.distance
  }

  carparks.sort(compareCarparksByDistance)
  return carparks
}

function combineCarparkData(carparkAvailability, carparks) {
  for (var carpark of carparkAvailability) {
    var carparkNumber = carpark.carpark_number
    matched_carpark = findMatchingCarpark(carpark_number, carparks)
    if (matched_carpark !== null) {
      matched_carpark.total_lots = carpark.carpark_info[0].total_lots
      matched_carpark.lots_available = carpark.carpark_info[0].lots_available
    }
  }
  return carparks
}

function findMatchingCarpark(carpark_number, carparks) {
  matchedCarpark = null
  for (carpark of carparks) {
    if (carpark.car_park_no === carpark_number) {
      matchedCarpark = carpark
      break
    }
  }
  return matchedCarpark
}

function getFirstTenCarparks(carparks) {
  return carparks.slice(0, 10)
}