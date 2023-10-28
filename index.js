const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const studentRoute = require("./studentsRouts/studentRouts");

const app = express();
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://aveswar:dTCScxCCh36QwOC8@cluster0.o6iacbs.mongodb.net/School");

const db = mongoose.connection;
db.on("open",()=>{
    console.log("Database Connected");
});
db.on("error",()=>{
    console.log("Error while connecting to database.")
})

app.use(express.json());
app.use(cors());
app.use("/students",studentRoute);

const port = 5500;
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})