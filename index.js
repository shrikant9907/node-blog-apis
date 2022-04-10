require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const port = process.env.port || 5000;
const dbUrl = process.env.DB_URL;
const apiUrl = process.env.API_URL;

mongoose.connect(dbUrl, { 
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const dbCon = mongoose.connection;

dbCon.on('error', (error) => {
    console.log(error)
})

dbCon.once('connected', () => {
    console.log('Connected to database successfully.');
})
const app = express();

app.use(express.json());

app.listen(port, () => {
    console.log(`Server started at ${apiUrl}:${port}`)
})