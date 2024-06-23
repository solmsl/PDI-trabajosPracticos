const { Sequelize } = require('sequelize');
const sequelize = require('../config/db_sequelize');

// Definir la estructura de la tabla rescatistas
const Rescatista = sequelize.define('Rescatista', {
    dni: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    apellido: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefono: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    direccion: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
  timestamps: false
})

Rescatista.sync();

module.exports = Rescatista;
