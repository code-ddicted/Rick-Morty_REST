const dbConn = require('./controllers/dbConnection'); 
const logCharacters = require('./controllers/logCharacters')
const fetchCharacters = require('./controllers/fetchCharacters')

dbConn()
logCharacters()
fetchCharacters()