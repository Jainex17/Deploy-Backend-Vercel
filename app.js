const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => { 
    res.send(`server is working frontend in ${process.env.FRONTEND_URL}`); 
});



module.exports = app

