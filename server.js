const express = require('express');

const database = require('./src/db/database')
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');


app.use(cors({ origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],  
}));

app.use(routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(process.env.PORT || 3000, () => console.log('Running on port 3000'));


