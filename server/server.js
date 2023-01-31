const express = require("express")
const app = express()
const PORT = 8000
const cors = require('cors');

let churches = [
    {
        "id": 1,
        "name": "Iglesia Cristiana",
        "location": "Pawtucket",
        "description": "A church that focuses on spreading the word of God.",
        "leadPastor": "Samuel Francisco",
        "associatePastors": ["Javier Torres"],
        "services": [
            { "name": "Servicio Evangelistico", "day": "Sunday", "time": "3:00PM" },
            { "name": "Estudio Biblico", "day": "Tuesday", "time": "7:00PM" },
            { "name": "Servicio Especial", "day": "Thursday", "time": "7:30PM" }
        ],
        "socialMedia": {
            "Facebook": "https://www.facebook.com/iglesia.cristiana",
            "Instagram": "https://www.instagram.com/iglesia.cristiana",
            "YouTube": "https://www.youtube.com/channel/UCBVz1_Cristiana"
        },
        "address": "1234 Main St",
        "phone": "401-555-1234",
        "email": "info@iglesia.com"
    },
    {
        "id": 2,
        "name": "Iglesia Cristiana 2",
        "location": "Pawtucket",
        "description": "A church that focuses on spreading the word of God.",
        "leadPastor": "Isabel Francisco",
        "associatePastors": ["Javier Torres"],
        "services": [
            { "name": "Servicio Evangelistico", "day": "Sunday", "time": "3:00PM" },
            { "name": "Estudio Biblico", "day": "Tuesday", "time": "7:00PM" },
            { "name": "Servicio Especial", "day": "Thursday", "time": "7:30PM" }
        ],
        "socialMedia": {
            "Facebook": "https://www.facebook.com/iglesia2.cristiana",
            "Instagram": "https://www.instagram.com/"
        }
    }]

app.use(cors())

app.get("/", (request, response) => {
    response.sendFile(__dirname + '/admin.html')
})

app.get("/iglesias/pawtucket", (request, response) => {
    response.json(churches[0])
})

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`)
})