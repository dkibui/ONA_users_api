const express = require("express")
const axios = require("axios")
const path = require("path")
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))

app.use(express.json())

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/:id", (req, res) => {
  let param = req.params.id
  axios
    .get(`https://api.ona.io/api/v1/profiles/${param}?format=json`)
    .then((resp) => {
      let data = resp.data
      res.render("edit", { data })
    })
    .catch((error) => {
      console.log("error")
    })
})

app.listen(port, () => {
  console.log(`Running at localhost:${port}`)
})
