const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller');
const { getFortune } = require('./controller');
const { getCoinFlip } = require('./controller');
const { getColor } = require('./controller');
//const { addDuck} = require('./controller');

//app.put("/api/getCoinFlip", addDuck);
app.get("/api/coinFlip", getCoinFlip);
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/color", getColor);



app.listen(4000, () => console.log("Server running on 4000"));
