const { Character } = require('../models'); // Destructuring Character from sequelize

// Function to query and log all characters
async function logCharacters() {
  try {
    // Query all characters
    const characters = await Character.findAll();
    
    if (characters.length === 0) {
      console.log('Empty');
    } else {
      // Log characters
      characters.forEach(character => {
        console.log(`Character ID: ${character.id}, Name: ${character.name}, Data: ${JSON.stringify(character.data)}`);
      });
    }

  } catch (error) {
    console.error('Error querying characters:', error);
  }
}

module.exports = logCharacters;
