const axios = require('axios');
const retry = require('async-retry');

const db = require('../models')
const { DataTypes } = require('sequelize');

const Character = db.sequelize.define('Character', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: {} // Example default value for JSONB field
    }
}, {
    tableName: 'code-ddicted' // Specify the table name explicitly
});

async function fetchCharacters() {
  let page = 1;
  let characters = [];

  try {
    let response; // Define response variable outside the do-while loop

    // Fetch characters from API until no more pages are available
    do {
      response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
      const results = response.data.results;

      // Iterate through characters on current page
      for (const character of results) {
                const { id, name } = character;
                await Character.create({ id, name, data:{} }); // Store character in the database
                console.log(`Character ID ${id} stored successfully.`);
            }

      characters.push(...results);
      page++;

    } while (characters.length < response.data.info.count);

    console.log('All characters stored successfully.');

  } catch (error) {
    console.error('Error fetching and storing characters:', error.message);
    // Handle error appropriately
  }
}

module.exports = fetchCharacters;
