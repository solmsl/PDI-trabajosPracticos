const { Sequelize } = require('sequelize');
const sequelize = require('../config/db_sequelize');

// Definir la estructura del producto
const Historial = sequelize.define('Historial', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    validate: {  
        isInt: true, //tiene que ser entero
        notNull: { msg: 'El ID no puede estar vacio'}
      }
  },
  castrado: {
    type: Sequelize.STRING,
    primaryKey: true,
    validate: {
        notEmpty: {
          msg: 'Este campo no puede estar vacío'
        }
      }
  },
  operado: {
    type: Sequelize.STRING,
    primaryKey: true,
    validate: {  
        notEmpty: {
            msg: 'Ingrese algo, el campo no puede estar vacio'
          }
      }
  },
  discapacidad: {
    type: Sequelize.STRING,
    primaryKey: true,
    validate: {
        notEmpty: {
          msg: 'Ingrese algo, el campo no puede estar vacio'
        }
      }
  },
  rabia: {
    type: Sequelize.STRING,
    primaryKey: true,
    validate: {
        notEmpty: {
          msg: 'Ingrese algo, el campo no puede estar vacio'
        }
      }
  },
  enfermedades: {
    type: Sequelize.STRING,
    primaryKey: true,
    validate: {
        notEmpty: {
          msg: 'Ingrese algo, el campo no puede estar vacio'
        }
      }
  },
  desparasitados: {
    type: Sequelize.STRING,
    primaryKey: true,
    validate: {
        notEmpty: {
          msg: 'Ingrese algo, el campo no puede estar vacio'
        }
      }
  },
}, {
  timestamps: false
})

Historial.sync();
// Historial.sync({alter: true}) | Historial.sync({force: true})

module.exports = Historial;