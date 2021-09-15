const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const url = "https://v2.jokeapi.dev/joke/Programming,Dark,Pun?blacklistFlags=sexist&type=single";
    https.get(url, (response) => {
        response.on("data", function (data) {
            const jokeData = JSON.parse(data);
            const joke = jokeData.joke;
            const categ= jokeData.category;
            res.write("<h1>"+categ+" Joke</h1>");
            res.write("<p>" + joke + "</p>");
            res.send();
        })
    })
})


app.listen(3000, (req, res) => {
    console.log("3000 is on");
})