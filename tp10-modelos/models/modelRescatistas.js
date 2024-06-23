const { Sequelize } = require('sequelize');
const sequelize = require('../config/db_sequelize');

// Definir la estructura de la tabla rescatistas
const Rescatista = sequelize.define('Rescatista', {
    dni: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        validate: {
            validarDni(value) {
              if (!value || value.length < 8) {
                throw new Error('DNI inválido');
              }
            }
          }
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
              args: [3, 50],
              msg: 'Nombre inválido: debe tener entre 3 y 50 caracteres'
            }
        }
    },
    apellido: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
              args: [3, 50],
              msg: 'Apellido inválido: debe tener entre 3 y 50 caracteres'
            }
        }
      
    },
    telefono: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, 
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
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
