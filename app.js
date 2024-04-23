const express = require("express")
const app = express()
const port = 3000
app.listen(port, function() {
    console.log("server is running")
})
app.get('/zainab', (req, res) => {
    res.send("hello zainab, how are you")
})
app.put('/zainab', (req, res) => {
    res.send("hello Zainab, how is school")
})
app.post('/zainab', (req, res) => {
    res.send("hello zainab, how is family")
})
app.patch('/zainab', (req, res) => {
    res.send("hello zainab, how is work")
})
app.delete('/zainab', (req, res) => {
    res.send("hello zainab, how is everything")
})
