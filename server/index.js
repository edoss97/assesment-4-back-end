const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortuneList, deleteFortune, addFortune } = require('./controller');


app.get('/api/compliment', getCompliment);

app.get('/api/compliment', getFortuneList);

app.delete('/api/name/:index', deleteFortune);

app.post('/api/compliment', addFortune)


app.listen(4000, () => console.log("Server running on 4000"));
