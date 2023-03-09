const app= require('express')();

const PORT = 8000;

app.listen(
    PORT,
    () => console.log(`server running on ${PORT}`)
);

app.get('/getRequest', (req, res) => {
    res.send("successful get request")
});

app.post('/postRequest', (req, res) => {
    res.send("Successful post request.. it worked")
})