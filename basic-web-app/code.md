# Build your own web app

---

# Why?

* NOT to become a software engineer
* Show you basics of how web apps work
* Have more meaningful discussion about web applications (understand the lingo)
* Give you confidence to learn more/explore about code!
* Give you something real to take home!

---

# Setup

Download and install:

* Atom (https://atom.io/)
* Zeit Now (https://zeit.co/download)
* Download Google-Drive folder (tinyurl.com/my-parking-app)

---

# Setup

Open the folder using Atom.

Open the HTML file using Google Chrome.

---

# What you're going to build

---

# How we're building this

1. Input box

1. Convert to X and Y

1. Find nearest 10 carparks

1. Styling the web page

---

# Suggested workflow

1. I'll write a small code snippet

1. I'll run the snippet to show you what it does

1. I'll explain the changes

1. You type out and try out the changes on your laptops!

---

# Displaying some text

---

```html
<body>
  hello
</body>
```

^ html, body, opening and closing tags

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

```html, [.highlight: 1, 3]
<body style="background-color: lightsteelblue; text-align: center;">
  <div>
    <input placeholder="Enter a postcode" style="width: 50%; font-size: 20px;">
  </div>
</body>
```

^ inline styles 

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

^ Use console to demonstrate objects, variables

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

```html, [.highlight: 7, 8, 17]
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

We're at our first milestone!

Next step, converting the postcode into x and y.

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

How can we convert a postcode into x and y?

We can "phone a friend"!

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

More than halfway done now!

Next, get the nearest carparks and display them.

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

---

`carpark-logic.js`

```javascript, [.highlight: 2-5]
getNearestCarparks: function() {
  getCarparkList(this.postcodeX, this.postcodeY)
  .then(carparks => {

  })
}
```

^ helper function

---

`carpark-logic.js`

```javascript, [.highlight: 2-4]
getNearestCarparks: function() {
  getCarparkList(this.postcodeX, this.postcodeY).then(carparks => {
    console.log(carparks)
  })
}
```

---

`carpark-logic.js`

```javascript, [.highlight: 3]
getNearestCarparks: function() {
  getCarparkList(this.postcodeX, this.postcodeY).then(carparks => {
    this.carparks = carparks
  })
}
```

---

All done with the logic.

Now we're going to make things look nicer!

---

`carpark.html`

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

^ remind them what our HTML is showing, compare against the goal

---

`carpark.html`

```html, [.highlight: 3]
<body>
  <div id="myParkingApp">
    <h1>Nearest Carpark Availability</h1>
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

^ 

---

`carpark.html`

```html, [.highlight: 11-13]
<body>
  <div id="myParkingApp">
    <h1>Nearest Carpark Availability</h1>
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

^ zoom in on the carpark info

---

`carpark.html`

```html, [.highlight: 2-3]
<div v-for="carpark in carparks">
  {{ carpark.distance }}<br>
  {{ carpark.address }}<br>
</div>
```

^ display specific info only

---

`carpark.html`

```html, [.highlight: 2-3]
<div v-for="carpark in carparks">
  Distance: {{ carpark.distance }}m <br>
  Address: {{ carpark.address }}<br>
</div>
```

^ nicer formatting

---

`carpark.html`

```html, [.highlight: 4-6]
<div v-for="carpark in carparks">
  Distance: {{ carpark.distance }}m<br>
  Address: {{ carpark.address }}<br>
  Total Lots: {{ carpark.total_lots }} <br>
  Lots Available: {{ carpark.lots_available }} <br>
  <br>
</div>
```

^ additional data we need to add into our carpark object

---

Now the content looks the same, but the styling of the content is different!

---

Recall how we did styles like background-color, text-align

---

Recall how we did styles like background-color, text-align

Doing all the styling like that makes it difficult to read and change our styles

---

Just like our Javascript code, we can put all our styles in a separate file!

`carpark.html`

```html, [.highlight: 4]
<head>
  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <link rel="stylesheet" type="text/css" href="carpark.css" />
</head>
```

---

`carpark.css`

```css
body {
  background-color: lightsteelblue;
  text-align: center;
}

input {
  width: 50%;
  font-size: 20px;
}
```


---

`carpark.html`

```html, [.highlight: 3,9,11]
<body>
  <div id="myParkingApp">
    <div id="inputBackground">
      <h1>Nearest Carpark Availability</h1>
      <input placeholder="Enter a postcode"
             v-model="postcode"
             v-on:keyup.enter="searchPostcode">
      <br>
    </div>

    <div id="carparkResults" v-for="carpark in carparks">
      Distance: {{ carpark.distance }}m<br>
      Address: {{ carpark.address }} <br>
      Total Lots: {{ carpark.total_lots }} <br>
      Lots Available: {{ carpark.lots_available }} <br>
      <br>
    </div>
  </div>
</body>
```

---

`carpark.html`

```html, [.highlight: 4]
<head>
  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <link rel="stylesheet" type="text/css" href="carpark-style.css" />
</head>
```

---

Deploying your app to the internet!

---

That's all folks :)