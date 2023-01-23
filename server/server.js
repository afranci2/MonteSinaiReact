const express = require("express")
const app = express()
const PORT = 8000



let churches = [
    {
        "LocationAndDescription": {"Pawtucket":""},
        "LeadPastor(s)AndDescription": [{ "Samuel Francisco": "" }, { "Isabel Francisco": "" }],
        "Associate Pastor(s)": [{ "Javier Torres": "" }],
        "ServiceTimes": {
            ServicioEvangelistico: { Domingos: "3:00PM" },
            EstudioBiblico: { Martes: "7:00PM" },
            ServicioEspecial: { Jueves: "7:30PM" }
        },
        "SocialMedia": {
            Facebook:
                "",
            Instagram: "",
            YouTube: "",
        },
    },
]

app.get("/", (request, response) => {
    response.sendFile(__dirname + '/admin.html')
})

app.get("/iglesias/pawtucket", (request, response) => {
    response.json(churches)
})

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`)
})