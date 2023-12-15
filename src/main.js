const express = require("express");
const app = express();


const PORT = 5000;


app.get("/", (request, response) => {
    response.send("Hej, Verden");
});


app.listen(PORT, () => {
    console.log(`Listen on port: ${PORT}`);
});
