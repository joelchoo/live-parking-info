```html
<body>
  hello
</body>
```
html, body, opening and closing tags, displaying text

---

```html, [.highlight: 2]
<body>
  <input>
</body>
```
input box

---

```html, [.highlight: 2,4]
<body>
  <div>
    <input>
  </div>
</body>
```
divs, opening and closing tags (again)

---

```html, [.highlight: 2]
<body>
  <div id="myParkingApp">
    <input>
  </div>
</body>
```
html attributes

---

```html, [.highlight: 2, 9-13]
<body>
  <script src="https://unpkg.com/vue"></script>

  <div id="myParkingApp">
    <input>
  </div>
</body>

<script>
new Vue({
  el: '#myParkingApp'
})
</script>
```
importing vue, adding script, objects, new, Vue, Vue()

---

```html, [.highlight: 5, 12-14]
<body>
  <script src="https://unpkg.com/vue"></script>

  <div id="myParkingApp">
    <input> {{ postcode }}
  </div>
</body>

<script>
new Vue({
  el: '#myParkingApp',
  data: {
    postcode: "123456"
  }
})
</script>
```
data object, interpolation

---

```html, [.highlight: 5]
<body>
  <script src="https://unpkg.com/vue"></script>

  <div id="myParkingApp">
    <input v-model="postcode"> {{ postcode }}
  </div>
</body>

<script>
new Vue({
  el: '#myParkingApp',
  data: {
    postcode: "123456"
  }
})
</script>
```
v-model

---

```html, [.highlight: 5,6,14]
<body>
  <script src="https://unpkg.com/vue"></script>

  <div id="myParkingApp">
    <input v-model="postcode"><br> 
    {{ postcode }}
  </div>
</body>

<script>
new Vue({
  el: '#myParkingApp',
  data: {
    postcode: ""
  }
})
</script>
```
br, postcode back to default

---

01-carpark.html done

---

```html, [.highlight: 5,16-20]
<body>
  <script src="https://unpkg.com/vue"></script>

  <div id="myParkingApp">
    <input v-model="postcode" @keyup.enter="searchPostcode"><br> 
    {{ postcode }}
  </div>
</body>

<script>
new Vue({
  el: '#myParkingApp',
  data: {
    postcode: ""
  },
  methods: {
    searchPostcode: function() {
      this.postcode = "111111"
    }
  }
})
</script>
```
functions/methods, @keyup.enter

---

```html, [.highlight: 6-8,17,18,22,23]
<body>
  <script src="https://unpkg.com/vue"></script>

  <div id="myParkingApp">
    <input v-model="postcode" @keyup.enter="searchPostcode"><br> 
    {{ postcode }}<br>
    {{ postcodeX }}<br>
    {{ postcodeY }}
  </div>
</body>

<script>
new Vue({
  el: '#myParkingApp',
  data: {
    postcode: "",
    postcodeX: null,
    postcodeY: null
  },
  methods: {
    searchPostcode: function() {
      this.postcodeX = 123
      this.postcodeY = 456
    }
  }
})
</script>
```
show desired result visually, null

---

```html, [.highlight: 3]
<body>
  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

  <div id="myParkingApp">
    <input v-model="postcode" @keyup.enter="searchPostcode"><br> 
    {{ postcode }}<br>
    {{ postcodeX }}<br>
    {{ postcodeY }}
  </div>
</body>

<script>
new Vue({
  el: '#myParkingApp',
  data: {
    postcode: "",
    postcodeX: null,
    postcodeY: null
  },
  methods: {
    searchPostcode: function() {
      this.postcodeX = 123
      this.postcodeY = 456
    }
  }
})
</script>
```

---

```javascript, [.highlight: 2-7]
searchPostcode: function() {
  axios.get('https://developers.onemap.sg/commonapi/search', {
    params: {
      searchVal: this.postcode,
      returnGeom: "Y",
      getAddrDetails: "N"
    }
  }).then(response => {
    this.postcodeY = response
  })
}
```

---

```javascript, [.highlight: 8-10]
searchPostcode: function() {
  axios.get('https://developers.onemap.sg/commonapi/search', {
    params: {
      searchVal: this.postcode,
      returnGeom: "Y",
      getAddrDetails: "N"
    }
  }).then(response => {
    this.postcodeY = response
  })
}
```

---

```javascript, [.highlight: 9,10]
searchPostcode: function() {
  axios.get('https://developers.onemap.sg/commonapi/search', {
    params: {
      searchVal: this.postcode,
      returnGeom: "Y",
      getAddrDetails: "N"
    }
  }).then(response => {
    var unwrappedResults = response.data.results[0]
    this.postcodeY = unwrappedResults
  })
}
```

---

```javascript, [.highlight: 9-11]
searchPostcode: function() {
  axios.get('https://developers.onemap.sg/commonapi/search', {
    params: {
      searchVal: this.postcode,
      returnGeom: "Y",
      getAddrDetails: "N"
    }
  }).then(response => {
    var unwrappedResults = response.data.results[0]
    this.postcodeX = unwrappedResults.X
    this.postcodeY = unwrappedResults.Y
  })
}
```

---

02-carpark.html done

---

