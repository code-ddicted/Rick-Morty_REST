const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const dbConn = require('./controllers/dbConnection'); 
const logCharacters = require('./controllers/logCharacters')
const fetchCharacters = require('./controllers/fetchCharacters')
const deleteCharacters = require('./controllers/deleteCharacters')

async function initializeApp() {
    try {
        await dbConn();
        console.log('Database connection established.');

        await deleteCharacters();
        console.log('Existing characters deleted.');

        await fetchCharacters();
        console.log('Characters fetched and stored.');

    } catch (error) {
        console.error('Error during initialization:', error.message);
    }
}

// Run the initializeApp function
initializeApp();