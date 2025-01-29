// Thư viện dotenv
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const connection = require('./config/database');

const port = process.env.PORT || 8888;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//config template engine ejs 
configViewEngine(app);

// Khai báo route
app.use("/", webRouter);






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})