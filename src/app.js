const express = require("express");
const app = express();
const indexRoutes = require("./routes/index.routes")

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs")
app.set("views", "./src/views")

app.use("/", indexRoutes)

module.exports = {
    app
}