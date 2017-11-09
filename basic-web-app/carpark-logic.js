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
      getCarparkList(this.postcodeX, this.postcodeY).then(carparks => {
        this.carparks = carparks
      })
    }
  }
}

new Vue(config)
