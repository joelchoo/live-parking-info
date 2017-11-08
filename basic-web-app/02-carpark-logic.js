var config = {
  el: '#myParkingApp',
  data: {
    postcode: "",
    postcodeX: "",
    postcodeY: ""
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
      })
    }
  }
}

new Vue(config)