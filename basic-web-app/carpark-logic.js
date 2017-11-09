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
      axios.get("https://developers.onemap.sg/commonapi/search", {
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
        // Calculate distance of every carpark to x and y
        var carparksWithDistance = addDistanceToCarparks(carparks, this.postcodeX, this.postcodeY)

        // Get the nearest ten carparks
        var nearestCarparks = getNearestTenCarparks(carparksWithDistance)
        this.carparks = nearestCarparks
      })
    }
  }
}

new Vue(config)
