const express = require("express");
const middleware = require("./middleware.js");
const path = require("path");
const database = require("./database.js");


const PORT = 5000;
const app = express();
const rd = path.join(__dirname, "../")


// Server configs
app.set("view engine", "ejs");
app.set("views", path.join(rd, "views"));


// Setup middleware
app.use(middleware);
app.use(express.static(path.join(rd, "public")));


app.get("/", (request, response) => {
    database.get();

    response.render("home");
});


app.listen(PORT, () => {
    console.log(`Listen on port: ${PORT}`);
});
