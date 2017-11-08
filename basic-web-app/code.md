# Build your own web app

---

# Setup

Download and install:

* Sublime Text (https://www.sublimetext.com/3)
* Google Chrome (https://www.google.com/chrome/)

---

# Setup

Create a file called `parking.html`

Open the file using Sublime Text.

Open the file using Google Chrome.

---

# What you're going to build

---

# TODO

# Sketch out our method

1. Input box

1. Convert to X and Y

1. Get list of all carparks

1. Find nearest 10 carparks

1. (Bonus) Filter the list of carparks

---

```html
<body>
  hello
</body>
```

^ html, body, opening and closing tags

---

# HTML

Language to describe web pages
Structure/skeleton of a web page

---

```html
<body>
  hello there!
</body>
```

---


```html
<body>
  hello<br>
  there!
</body>
```

---

```html, [.highlight: 2]
<body>
  <input>
</body>
```

^ input box

---

```html, [.highlight: 2,4]
<body>
  <div>
    <input>
  </div>
</body>
```

^ divs, opening and closing tags (again)

---

```html, [.highlight: 3]
<body>
  <div>
    <input placeholder="Enter a postcode">
  </div>
</body>
```

^ html attributes, strings

---

```html, [.highlight: 7-9]
<body>
  <div>
    <input placeholder="Enter a postcode">
  </div>
</body>

<script>
  alert("Hello!")
</script>
```

^ adding scripts, functions (calls), interactivity

---

```html, [.highlight: 7-9]
<body>
  <div>
    <input placeholder="Enter a postcode">
  </div>
</body>

<script>
  console.log("Hello!")
</script>
```

^ console.log, debugging?

---

```html, [.highlight: 1-3]
<head>
  <script src="https://unpkg.com/vue"></script>
</head>

<body>
  <div>
    <input placeholder="Enter a postal code">
  </div>
</body>

<script>
  console.log("Hello!")
</script>
```

^ importing vue, head, why in head and not below

---

```html, [.highlight: 11-15]
<head>
  <script src="https://unpkg.com/vue"></script>
</head>

<body>
  <div>
    <input placeholder="Enter a postal code">
  </div>
</body>

<script>
  new Vue()
</script>
```

^ using Vue framework, new, Vue() vs Vue


---

Use console to demonstrate objects, variables

---

```html, [.highlight: 6, 12-16]
<head>
  <script src="https://unpkg.com/vue"></script>
</head>

<body>
  <div id="myParkingApp">
    <input placeholder="Enter a postal code">
  </div>
</body>

<script>
  var config = {
    el: "#myParkingApp"
  }

  new Vue(config)
</script>
```

^ objects, id, variables

---

```html, [.highlight: 8, 14-17]
<head>
  <script src="https://unpkg.com/vue"></script>
</head>

<body>
  <div id="myParkingApp">
    <input placeholder="Enter a postcode">
    {{ postcode }}
  </div>
</body>

<script>
  var config = {
    el: "#myParkingApp",
    data: {
      postcode: "123456"
    }
  }

  new Vue(config)
</script>
```

^ data object, interpolation

---

```html, [.highlight: 8, 17]
<head>
  <script src="https://unpkg.com/vue"></script>
</head>

<body>
  <div id="myParkingApp">
    <input placeholder="Enter a postcode"
           v-model="postcode">
    {{ postcode }}
  </div>
</body>

<script>
new Vue({
  el:  "#myParkingApp",
  data: {
    postcode: ""
  }
})
</script>
```

^ v-model

---

01-carpark.html done

---

Create a file named `carpark-logic.js`

---

`carpark.html`

```html, [.highlight: 13]
<head>
  <script src="https://unpkg.com/vue"></script>
</head>

<body>
  <div id="myParkingApp">
    <input placeholder="Enter a postcode"
           v-model="postcode">
    {{ postcode }}
  </div>
</body>

<script src="carpark-logic.js"></script>
```

^ importing our own files

---

`carpark-logic.js`

```javascript
var config = {
  el: "#myParkingApp",
  data: {
    postcode: ""
  }
}

new Vue(config)
```

---

`carpark.html`

```html, [.highlight: 6-7]
<body>
  <div id="myParkingApp">
    <input placeholder="Enter a postcode"
           v-model="postcode">
    {{ postcode }}
    {{ postcodeX }}
    {{ postcodeY }}
  </div>
</body>
```

---

`carpark-logic.js`

```javascript, [.highlight: 4-6]
var config = {
  el: "#myParkingApp",
  data: {
    postcode: "",
    postcodeX: "111",
    postcodeY: "222"
  }
}
```

---

`carpark.html`

```html, [.highlight: 9-11]
<head>
  <script src="https://unpkg.com/vue"></script>
</head>

<body>
  <div id="myParkingApp">
    <input placeholder="Enter a postcode"
           v-model="postcode">
    {{ postcode }}<br>
    {{ postcodeX }}<br>
    {{ postcodeY }}<br>
  </div>
</body>

<script src="carpark-logic.js"></script>
```

---

`carpark.html`

```html, [.highlight: 5]
<body>
  <div id="myParkingApp">
    <input placeholder="Enter a postcode"
           v-model="postcode"
           v-on:keyup.enter="postcode = 275983">
    {{ postcode }}<br>
    {{ postcodeX }}<br>
    {{ postcodeY }}<br>
  </div>
</body>
```

^ keypress events

---

`carpark-logic.js`

```javascript, [.highlight: 5-13]
var config = {
  el: "#myParkingApp",
  data: {
    postcode: "",
    postcodeX: "",
    postcodeY: ""
  },
  methods: {
    searchPostcode: function() {
      this.postcodeX = "333"
      this.postcodeY = "444"
    }
  }
}
```

^ write our function here, functions/methods, accessing data using this.var

---

`carpark.html`

```html, [.highlight: 5]
<body>
  <div id="myParkingApp">
    <input placeholder="Enter a postcode"
           v-model="postcode"
           v-on:keyup.enter="searchPostcode">
    {{ postcode }}<br>
    {{ postcodeX }}<br>
    {{ postcodeY }}<br>
  </div>
</body>
```

^ link to vue method

---

`carpark.html`

```html, [.highlight: 3]
<head>
  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>
```

^ import axios, explain what making HTTP requests is

---

`carpark-logic.js`

```javascript, [.highlight: 2-7]
searchPostcode: function() {
  axios.get("https://developers.onemap.sg/commonapi/search", {
    params: {
      searchVal: this.postcode,
      returnGeom: "Y",
      getAddrDetails: "N"
    }
  })
}
```

^ making HTTP request, params, looking at documentation

---

`carpark-logic.js`

```javascript, [.highlight: 8-10]
searchPostcode: function() {
  axios.get("https://developers.onemap.sg/commonapi/search", {
    params: {
      searchVal: this.postcode,
      returnGeom: "Y",
      getAddrDetails: "N"
    }
  }).then(response => {
    console.log(response)
  })
}
```

^ displaying response object, see what it looks like

---

`carpark-logic.js`

```javascript, [.highlight: 9]
searchPostcode: function() {
  axios.get("https://developers.onemap.sg/commonapi/search", {
    params: {
      searchVal: this.postcode,
      returnGeom: "Y",
      getAddrDetails: "N"
    }
  }).then(response => {
    console.log(response.data)
  })
}
```

^ unwrapping response object, dot notation

---

`carpark-logic.js`

```javascript, [.highlight: 9]
searchPostcode: function() {
  axios.get("https://developers.onemap.sg/commonapi/search", {
    params: {
      searchVal: this.postcode,
      returnGeom: "Y",
      getAddrDetails: "N"
    }
  }).then(response => {
    console.log(response.data.results[0])
  })
}
```

^ arrays

---

`carpark-logic.js`

```javascript, [.highlight: 9-11]
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
  })
}
```

---

02-carpark.html done

---

`carpark.html`

```html, [.highlight: 7-9]
<body>
  <div id="myParkingApp">
    <input placeholder="Enter a postcode"
           v-model="postcode"
           v-on:keyup.enter="searchPostcode">

    <div v-for="carpark in carparks">
      {{ carpark }}
    </div>
  </div>
</body>
```

^ v-for

---

`carpark-logic.js`

```javascript, [.highlight: 4-5]
data: {
  postcode: "",
  postcodeX: "",
  postcodeY: "",
  carparks: []
}
```

^ loops, arrays (again), displaying the result

---

`carpark-logic.js`

```javascript, [.highlight: 13, 15, 17-19]
methods: {
  searchPostcode: function() {
    axios.get("https://developers.onemap.sg/commonapi/search", {
      params: {
        searchVal: this.postcode,
        returnGeom: "Y",
        getAddrDetails: "N"
      }
    }).then(response => {
      var unwrappedResults = response.data.results[0]
      this.postcodeX = unwrappedResults.X
      this.postcodeY = unwrappedResults.Y
      this.getNearestCarparks()
    })
  },

  getNearestCarparks: function() {
    this.carparks = ["carpark1", "carpark2", "carpark3"]
  }
}
```

^ getNearestCarparks, displaying the result

---

Recall:

```javascript
searchPostcode: function() {
  axios.get("https://developers.onemap.sg/commonapi/search", {
    ...
  }).then(response => {
    ...
  })
}
```

---

Recall:

```javascript
searchPostcode: function() {
  axios.get("https://developers.onemap.sg/commonapi/search", {
    ...
  }).then(response => {
    ...
  })
}
```

I wish we could do:

```javascript, [.highlight: 1-3]
getNearestCarparks: function() {
  axios.get('https://getcarparks.com/').then(carparks => ...)
}
```

---

`carpark.html`

```html
<head>
  ...
</head>

<body>
  ...
</body>

<script src="carpark-helpers.js"></script>
<script src="carpark-logic.js"></script>
```

`carpark-logic.js`

```javascript, [.highlight: 2-4]
getNearestCarparks: function() {
  getCarparkList().then(carparks => {

  })
}
```

^ helper function

---

`carpark-logic.js`

```javascript, [.highlight: 2-4]
getNearestCarparks: function() {
  getCarparkList().then(carparks => {
    console.log(carparks)
  })
}
```

---

`carpark-logic.js`

```javascript, [.highlight: 3-7]
getNearestCarparks: function() {
  getCarparkList().then(carparks => {
    // Calculate distance from every carpark to the postcode
    
    // Sort the carparks by ascending distance to the postcode

    // Take the first ten carparks
  })
}
```

---

`carpark-logic.js`

```javascript, [.highlight: 3-7]
getNearestCarparks: function() {
  getCarparkList().then(carparks => {
    // Calculate distance from every carpark to the postcode
    for (var carpark of carparks) {
      var distance = distanceFromXY(carpark, this.postcodeX, this.postcodeY)
      carpark.distance = distance
    }
    
    // Sort the carparks by ascending distance to the postcode

    // Take the first ten carparks
  })
}
```

---

`carpark-logic.js`

```javascript, [.highlight: 9-10]
getNearestCarparks: function() {
  getCarparkList().then(carparks => {
    // Calculate distance from every carpark to the postcode
    for (var carpark of carparks) {
      var distance = distanceFromXY(carpark, this.postcodeX, this.postcodeY)
      carpark.distance = distance
    }
    
    // Sort the carparks by ascending distance to the postcode
    var sortedCarparks = sortCarparksByDistance(carparks)

    // Take the first ten carparks
  })
}
```

---

`carpark-logic.js`

```javascript, [.highlight: 12-13]
getNearestCarparks: function() {
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
  })
}
```

---

`carpark-logic.js`

```javascript, [.highlight: 14]
getNearestCarparks: function() {
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
```

---

03-carpark.html done

---

```html
<body>
  <div id="myParkingApp">
    <input placeholder="Enter a postcode"
           v-model="postcode"
           v-on:keyup.enter="searchPostcode">
    {{ postcode }}<br>
    {{ postcodeX }}<br>
    {{ postcodeY }}

    <div v-for="carpark in carparks">
      {{ carpark }}
    </div>
  </div>
</body>
```

remind them what our HTML is showing

---

```html, [.highlight: 11-12]
<body>
  <div id="myParkingApp">
    <input placeholder="Enter a postcode"
           v-model="postcode"
           v-on:keyup.enter="searchPostcode">
    {{ postcode }}<br>
    {{ postcodeX }}<br>
    {{ postcodeY }}

    <div v-for="carpark in carparks">
      {{ carpark.distance }}<br>
      {{ carpark.address }}<br>
    </div>
  </div>
</body>
```

display specific info only

---

```html, [.highlight: 11-13]
<body>
  <div id="myParkingApp">
    <input placeholder="Enter a postcode"
           v-model="postcode"
           v-on:keyup.enter="searchPostcode">
    {{ postcode }}<br>
    {{ postcodeX }}<br>
    {{ postcodeY }}

    <div v-for="carpark in carparks">
      Distance: {{ carpark.distance }}m <br>
      Address: {{ carpark.address }}<br>
      <br>
    </div>
  </div>
</body>
```

nicer formatting

---

```html, [.highlight: 13-15]
<body>
  <div id="myParkingApp">
    <input placeholder="Enter a postcode"
           v-model="postcode"
           v-on:keyup.enter="searchPostcode">
    {{ postcode }}<br>
    {{ postcodeX }}<br>
    {{ postcodeY }}

    <div v-for="carpark in carparks">
      Distance: {{ carpark.distance }}m<br>
      Address: {{ carpark.address }}<br>
      Total Lots: {{ carpark.total_lots }} <br>
      Lots Available: {{ carpark.lots_available }} <br>
      <br>
    </div>
  </div>
</body>
```

additional data we need to add into our carpark object

---

```javascript
getNearestCarparks: function() {
  axios.get("https://data.gov.sg/api/action/datastore_search", {
    params: {
      resource_id: "139a3035-e624-4f56-b63f-89ae28d4ae4c",
      limit: 2074
    }
  }).then(response => {
    var carparks = response.data.result.records
    var nearest_carparks = this.getNearestCarparks(carparks)
    this.carparks = nearest_carparks
  })
},
```

where we left off for our logic

---

```javascript, [.highlight: 10]
getNearestCarparks: function() {
  axios.get("https://data.gov.sg/api/action/datastore_search", {
    params: {
      resource_id: "139a3035-e624-4f56-b63f-89ae28d4ae4c",
      limit: 2074
    }
  }).then(response => {
    var carparks = response.data.result.records
    var nearest_carparks = this.getNearestCarparks(carparks)
    this.getCarparkAvailability(nearest_carparks)
  })
},
```

set it up for our next function

---

```javascript
methods: {
  searchPostcode: function() {
    ...
  },
  getNearestCarparks: function() {
    ...
  },
  getNearestCarparks: function(carparks) {
    ...
  },
  getCarparkAvailability: function(carparks) {

  }
}
```

new method

---

```javascript, [.highlight: 2-6]
getCarparkAvailability: function(carparks) {
  axios.get("https://api.data.gov.sg/v1/transport/carpark-availability", {
    headers: {
      "api-key": "YOUR_API_KEY"
    }
  })
}
```

api keys, datagovsg APIs

---

```javascript, [.highlight: 6-8]
getCarparkAvailability: function(carparks) {
  axios.get("https://api.data.gov.sg/v1/transport/carpark-availability", {
    headers: {
      "api-key": "YOUR_API_KEY"
    }
  }).then(response => {
    console.log(response)
  })
}
```

explore the response from API

---

```javascript, [.highlight: 7-8]
getCarparkAvailability: function(carparks) {
  axios.get("https://api.data.gov.sg/v1/transport/carpark-availability", {
    headers: {
      "api-key": "YOUR_API_KEY"
    }
  }).then(response => {
    var carpark_availability = response.data.items[0].carpark_data
    console.log(carpark_availability)
  })
}
```

---

```javascript, [.highlight: 9-11]
getCarparkAvailability: function(carparks) {
  axios.get("https://api.data.gov.sg/v1/transport/carpark-availability", {
    headers: {
      "api-key": "YOUR_API_KEY"
    }
  }).then(response => {
    var carpark_availability = response.data.items[0].carpark_data

    // Match carpark_number in carpark_availability
    // with car_park_no in carparks
    this.carparks = combineCarparkData(carpark_availability, carparks)
  })
}
```

high level description of what we want to do

---

04-carparks.html done

