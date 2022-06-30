const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const routes = require("./routes/TodoRoute");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const MONGODB_URI = 'mongodb+srv://zannat:CkmtlvACPNgoORkx@tododb.hfryy.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI || 'mongodb://localhost/tododb',
     {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.on('connected', () =>{
        console.log("mongoose is connected");
    }); 

    // CkmtlvACPNgoORkx-pass zannat-user
    // .then(() => console.log("Mongodb Connected..."))
    // .catch((err) => console.error(err));

    // try {
    //     mongoose.connect( uri,
    //          {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    //     console.log("connected"));    
    //     }catch (error) { 
    //     console.log("could not connect");    
    //     }
// Routes
app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));