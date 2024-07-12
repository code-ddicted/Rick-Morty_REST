const axios = require('axios');
const retry = require('async-retry');
const db = require('../models');
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
        defaultValue: {}
    }
}, {
    tableName: 'code-ddicted'
});

async function fetchCharacters() {
    let page = 1;
    const characters = [];

    try {
        await retry(async () => {
            let response;
            do {
                response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
                response.data.results.forEach(character => {
                    characters.push({
                        id: character.id,
                        name: character.name,
                        data: character
                    });
                });
                page++;
            } while (response.data.info.next !== null)
        }, {
            retries: 3,
            // Retry settings...
        });

        await db.sequelize.transaction(async (transaction) => {
            await Character.bulkCreate(characters, { ignoreDuplicates: false, transaction });
        });

        console.log('All characters stored successfully.');

    } catch (error) {
        console.error('Error fetching characters:', error.message);
    }
}

// Call the function to start fetching characters
module.exports = fetchCharacters;
