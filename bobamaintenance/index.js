import express from "express";
import mysql from 'mysql2';

const app= express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "baltimore",
    database: "Client_Server"
})

const PORT = 8000;

app.listen(
    PORT,
    () => console.log(`server running on ${PORT}`)
);

app.get('/getRequest', (req, res) => {
    const q = "SELECT * FROM Client_Server.clientInformation"
    // res.send("successful get request")
    db.query(q,(err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.post('/postRequest', (req, res) => {
    res.send("Successful post request.. it worked")
})

app.put('/putRequest', (req, res) => {
    res.send("INSERT INTO clientInformation VALUES")
})