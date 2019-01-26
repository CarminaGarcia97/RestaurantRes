const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservations = [
    {
        "customerName": "Jose",
        "customerEmail": "jose@gmail.com",
        "phoneNumber": "979-587-0887",
        "customerID": "JoseH"
    },
    {
        "customerName": "Ashley",
        "customerEmail": "ashley@gmail.com",
        "phoneNumber": "979-587-0887",
        "customerID": "Ashley"
    }
];

let waitingList = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
  
app.get("/tables", function(req, res) {
res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/add", function(req, res) {
res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function (req, res){
    return res.json(reservations);
});

app.get("/api/waiting", function (req, res){
    return res.json(waitingList);
});

app.post("/api/tables", (req, res) => {

if (reservations.length < 5){
        let newReservation = req.body;
        reservations.push(newReservation);
        // res.json(newReservation);
        res.status(200).json({success:"IM BEING SENT BACK"});

} else {
        let newReservation = req.body;
        waitingList.push(newReservation);
        // res.status(200).json(newReservation);
        res.status(200).json({success:"IM BEING SENT BACK"});
}
})
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});