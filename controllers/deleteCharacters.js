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
        defaultValue: {} // Example default value for JSONB field
    }
}, {
    tableName: 'code-ddicted' // Specify the table name explicitly
});

async function deleteAllCharacters() {
    try {
        const numDeleted = await Character.destroy({
            where: {},
            truncate: true // This ensures that the table is truncated (emptied) rather than deleting rows one by one
        });
    } catch (error) {
        console.error('Error deleting characters:', error.message);
        throw error; // Rethrow the error to handle it appropriately
    }
}

module.exports = deleteAllCharacters;
