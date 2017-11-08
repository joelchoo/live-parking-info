var config = {
  el: '#myParkingApp',
  data: {
    postcode: "",
    postcodeX: "",
    postcodeY: "",
    carparks: []
  },
  methods: {
    searchPostcode: function() {
      axios.get('https://developers.onemap.sg/commonapi/search', {
        params: {
          searchVal: this.postcode,
          returnGeom: "Y",
          getAddrDetails: "N"
        }
      }).then(response => {
        var searchResult = response.data.results[0]
        this.postcodeX = searchResult.X
        this.postcodeY = searchResult.Y
        this.getNearestCarparks()
      })
    },

    getNearestCarparks: function() {
      // Get list of carparks
      getCarparkList().then(carparks => {
        // Calculate distance from every carpark to the postcode
        for (var carpark of carparks) {
          var distance = distanceFromXY(carpark, this.postcodeX, this.postcodeY)
          carpark.distance = distance
        }

        // Sort the carparks by ascending distance to the postcode
        var sortedCarparks = sortCarparksByDistance(carparks)

        // Take the first ten carparks
        var nearestCarparks = getFirstTenCarparks(sortedCarparks)
        this.carparks = nearestCarparks
      })
    }
  }
}

new Vue(config)