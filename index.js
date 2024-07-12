const express = require('express');
const dotenv = require('dotenv');
const { exec } = require('child_process');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const dbConn = require('./controllers/dbConnection'); 
const logCharacters = require('./controllers/logCharacters')
const fetchCharacters = require('./controllers/fetchCharacters')
const deleteCharacters = require('./controllers/deleteCharacters')

async function App(){
    dbConn()
    await deleteCharacters()
    console.log('Characters deleted from database')
    fetchCharacters()
}

App()
