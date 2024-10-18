const app = require('express')()

app.get('/test', (req, res) => [
    res.send({ message: "Server tesing done", status: 1 })
])
app.listen('4000', () => {
    console.log("Server started");

})
