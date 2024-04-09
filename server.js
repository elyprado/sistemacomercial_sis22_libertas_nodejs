//server.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

//adiciona pasta pública
app.use(express.static("public"));


require('./src/index')(app); 
app.listen(3333); 





//    http://127.0.0.1:3333/usuario