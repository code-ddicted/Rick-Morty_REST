module.exports = (sequelize, DataTypes) => {
     const Character = sequelize.define('Character', {
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

  return Character;
};
