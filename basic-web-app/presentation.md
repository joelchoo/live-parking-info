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
* Zeit Now (https://zeit.co/download) // TODO: replace?
* Download Google-Drive folder (tinyurl.com/my-parking-app)

---

# Setup

Open the folder using Atom.

Open the HTML file using Google Chrome.

---

# What you're going to build

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
  hello

  there!
</body>
```

^ html does not care about your file. just a structure

---


```html, [.highlight: 2]
<body>
  <h1>hello</h1>

  there!
</body>
```

^ different tags, a bit of styles

---


```html
<body>
  <h1>Nearest Carpark Availability</h1>
</body>
```

---

```html, [.highlight: 3]
<body>
  <h1>Nearest Carpark Availability</h1>
  <input>
</body>
```

---

```html, [.highlight: 3]
<body>
  <h1>Nearest Carpark Availability</h1>
  <input placeholder="Enter a postcode">
</body>
```

---

```html, [.highlight: 5]
<body>
  <h1>Nearest Carpark Availability</h1>
  <input placeholder="Enter a postcode">

  <div>Hello!</div>
</body>
```

^ explain what divs are and why there is no visible change. I think we should include styles here.

---

```html
<body>
  <h1>Nearest Carpark Availability</h1>
  <input placeholder="Enter a postcode">

  <div>Address: Blk 123 Imaginary Road</div>
  <div>Total Lots: 100</div>
  <div>Available Lots: 23</div>
</body>
```

---

insert inline styles here?

---

```html, [.highlight: 10]
<body>
  <h1>Nearest Carpark Availability</h1>
  <input placeholder="Enter a postcode">

  <div>Address: Blk 123 Imaginary Road</div>
  <div>Total Lots: 100</div>
  <div>Available Lots: 23</div>
</body>

<script> alert("Hello!") </script>
```

---

```html, [.highlight: 10]
<body>
  <h1>Nearest Carpark Availability</h1>
  <input placeholder="Enter a postcode">

  <div>Address: Blk 123 Imaginary Road</div>
  <div>Total Lots: 100</div>
  <div>Available Lots: 23</div>
</body>

<script src="carpark-logic.js"></script>
```

---

`carpark-logic.js`

```javascript
alert("Hello!")
```

---

We want to inject text into our HTML document.

1. Find the place (element) where we want to inject text
1. Inject the text!

---

To find the right place (element) to inject the text, we need to give the place (element) a name!

---

`index.html`

```html, [.highlight: 5]
<body>
  <h1>Nearest Carpark Availability</h1>
  <input placeholder="Enter a postcode">

  <div id="carparkAddress">Address: Blk 123 Imaginary Road</div>
  <div>Total Lots: 100</div>
  <div>Available Lots: 23</div>
</body>

<script src="carpark-logic.js"></script>
```

---

`carpark-logic.js`

```javascript
document.getElementById("carparkAddress").innerText = "Address: Blk 456"
```

---

`index.html`

```html, [.highlight: 5-7]
<body>
  <h1>Nearest Carpark Availability</h1>
  <input placeholder="Enter a postcode">

  <div id="carparkAddress"></div>
  <div id="carparkTotalLots"></div>
  <div id="carparkAvailableLots"></div>
</body>

<script src="carpark-logic.js"></script>
```

---

`carpark-logic.js`

```javascript
document.getElementById("carparkAddress").innerText = "Address: Blk 456"
document.getElementById("carparkTotalLots").innerText = "Total Lots: 100"
document.getElementById("carparkAvailableLots").innerText = "Available Lots: 23"
```

---

`carpark-logic.js`

```javascript
function addCarparkToPage(address, totalLots, availableLots) {
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}
```

---

`carpark-logic.js`

```javascript
function addCarparkToPage(address, totalLots, availableLots) {
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}

addCarparkToPage("Blk 123 Imaginary Lane", 123, 12)
```

^ all function parameters should be strings

---

# Part 2? Done

---

`index.html`

```html, [.highlight: 3]
<body>
  <h1>Nearest Carpark Availability</h1>
  <input id="postcodeInput" placeholder="Enter a postcode">

  <div id="carparkAddress"></div>
  <div id="carparkTotalLots"></div>
  <div id="carparkAvailableLots"></div>
</body>

<script src="carpark-logic.js"></script>
```

---

`carpark-logic.js`

```javascript, [.highlight: 9]
function addCarparkToPage(address, totalLots, availableLots) {
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}

addCarparkToPage("Blk 123 Imaginary Lane", 123, 12)

document.getElementById("postcodeInput")
```

---

`carpark-logic.js`

```javascript, [.highlight: 9]
function addCarparkToPage(address, totalLots, availableLots) {
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}

addCarparkToPage("Blk 123 Imaginary Lane", 123, 12)

document.getElementById("postcodeInput").addEventListener("keydown", handleKeydown)
```

---

`carpark-logic.js`

```javascript, [.highlight: 7-13]
function addCarparkToPage(address, totalLots, availableLots) {
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}

addCarparkToPage("Blk 123 Imaginary Lane", 123, 12)

function handleKeydown(event) {

}

document.getElementById("postcodeInput").addEventListener("keydown", handleKeydown)
```

---

`carpark-logic.js`

```javascript, [.highlight: 7-11]
function addCarparkToPage(address, totalLots, availableLots) {
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}

function handleKeydown(event) {
  addCarparkToPage("Blk 123 Imaginary Lane", 123, 12)
}

document.getElementById("postcodeInput").addEventListener("keydown", handleKeydown)
```

---

`carpark-logic.js`

```javascript, [.highlight: 8-10]
function addCarparkToPage(address, totalLots, availableLots) {
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}

function handleKeydown(event) {
  if (event.key === "Enter") {
    addCarparkToPage("Blk 123 Imaginary Lane", 123, 12)
  }
}

document.getElementById("postcodeInput").addEventListener("keydown", handleKeydown)
```

^ bit confused that handleKeyDown does not take a input parameter
^ mention that functions need to be defined before they are called

---

# next step?

---

We need to get the postcode that we typed in.

We can do that in a similar way to how we injected the text.

---

`carpark-logic.js`

```javascript, [.highlight: 9]
function addCarparkToPage(address, totalLots, availableLots) {
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}

function handleKeydown(event) {
  if (event.key === "Enter") {
    addCarparkToPage(document.getElementById("postcodeInput").value, 123, 12)
  }
}

postcodeInput.addEventListener("keydown", handleKeydown)
```

---

`carpark-logic.js`

```javascript, [.highlight: 7-15]
function addCarparkToPage(address, totalLots, availableLots) {
  document.getElementById("carparkAddress").innerText = "Address: " + address
  document.getElementById("carparkTotalLots").innerText = "Total Lots: " + totalLots
  document.getElementById("carparkAvailableLots").innerText = "Available Lots: " + availableLots
}

function searchPostcode(postcode) {
  addCarparkToPage(postcode, 123, 12)
}

function handleKeydown(event) {
  if (event.key === "Enter") {
    searchPostcode(document.getElementById("postcodeInput").value)
  }
}

postcodeInput.addEventListener("keydown", handleKeydown)
```

---

We need to take the postcode and find the nearest carpark to it.

First, we will convert the postcode to X and Y values (similar to latitude and longitude).

To do that, we need to make an API call.

---

`index.html`

```html, [.highlight: 1-3]
<head>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>

<body>
  <h1>Nearest Carpark Availability</h1>
  <input id="postcodeInput" placeholder="Enter a postcode">

  <div id="carparkAddress"></div>
  <div id="carparkTotalLots"></div>
  <div id="carparkAvailableLots"></div>
</body>

<script src="carpark-logic.js"></script>
```

---

`carpark-logic.js`

```javascript
function searchXY(response) {
  addCarparkToPage("My Home", 123, 12)
}

function searchPostcode(postcode) {
  axios.get("https://developers.onemap.sg/commonapi/search", {
    params: {
      searchVal: postcode,
      returnGeom: "Y",
      getAddrDetails: "N"
    }
  }).then(searchXY)
}
```

^ why does searchXY not take in an input parameter?

---

`carpark-logic.js`

```javascript, [.highlight: 2]
function searchXY(response) {
  var searchResult = response.data.results[0]
  addCarparkToPage("My Home", 123, 12)
}
```

---

`index.html`

```html, [.highlight: 14]
<head>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>

<body>
  <h1>Nearest Carpark Availability</h1>
  <input id="postcodeInput" placeholder="Enter a postcode">

  <div id="carparkAddress"></div>
  <div id="carparkTotalLots"></div>
  <div id="carparkAvailableLots"></div>
</body>

<script src="carpark-helpers.js"></script>
<script src="carpark-logic.js"></script>
```

---

`carpark-logic.js`

```javascript, [.highlight: 1, 8]
function addCarparkToPage([address, totalLots, availableLots]) {
  .
  .
  .
}

function searchXY(response) {
  var searchResult = response.data.results[0]
  getNearestCarparkTo(searchResult.X, searchResult.Y).then(addCarparkToPage)
}

```

^ is there no way to avoid callbacks? what about addCarparkToPage(getNearestCarpark(X,Y))? hmmm.. not sure if that is better

---

All logic done!

---

`index.html`

```html, [.highlight: 3]
<head>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <link rel="stylesheet" type="text/css" href="carpark-style.css"></link>
</head>

<body>
  <h1>Nearest Carpark Availability</h1>
  <input id="postcodeInput" placeholder="Enter a postcode">

  <div id="carparkAddress"></div>
  <div id="carparkTotalLots"></div>
  <div id="carparkAvailableLots"></div>
</body>

<script src="carpark-helpers.js"></script>
<script src="carpark-logic.js"></script>
```

---

`index.html`

```html, [.highlight: 7-10]
<head>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <link rel="stylesheet" type="text/css" href="carpark-style.css"></link>
</head>

<body>
  <div id="inputBackground">
    <h1>Nearest Carpark Availability</h1>
    <input id="postcodeInput" placeholder="Enter a postcode">
  </div>

  <div id="carparkAddress"></div>
  <div id="carparkTotalLots"></div>
  <div id="carparkAvailableLots"></div>
</body>

<script src="carpark-helpers.js"></script>
<script src="carpark-logic.js"></script>
```

---

`index.html`

```html, [.highlight: 12-16]
<head>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <link rel="stylesheet" type="text/css" href="carpark-style.css"></link>
</head>

<body>
  <div id="inputBackground">
    <h1>Nearest Carpark Availability</h1>
    <input id="postcodeInput" placeholder="Enter a postcode">
  </div>

  <div id="nearestCarpark">
    <div id="carparkAddress"></div>
    <div id="carparkTotalLots"></div>
    <div id="carparkAvailableLots"></div>
  </div>
</body>

<script src="carpark-helpers.js"></script>
<script src="carpark-logic.js"></script>
```

---

Done!
