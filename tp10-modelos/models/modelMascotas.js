const { Sequelize } = require('sequelize');
const sequelize = require('../config/db_sequelize');

// Definir la estructura de la tabla mascotas
const mascotas = sequelize.define('mascotas', {
  id: {
    type: Sequelize.INTEGER, //debe ser de caracter entero
    allowNull: false, //el campo no puede estar vacio  en la bd
    primaryKey: true, //es clave primaria
    autoIncrement: true, //incrementara si no se le asigna un valor
    validate: {  
      isInt: true, //tiene que ser entero
      notNull: { msg: 'No puede estar vacio'} //no puede estar vacio (antes de ingresar a la bd)
    }
  },

  nombre_apodo: {
    type: Sequelize.STRING, //debe ser de caracter string
    allowNull: false, //el campo no puede estar vacio
    validate: {
      isString: function(valorMascota) {
        if (typeof valorMascota !== 'string') {
          throw new Error('El nombre/apodo debe ser un string');
        }
      }
    }
  },

  raza: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'El campo raza no puede estar vacío'
      }
    }
  },

  color: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Agregale el color de pelaje de tu mascota'
  },

  estado_salud: {
    type: Sequelize.STRING,
    allowNull: false, //el campo no puede estar vacio
    validate: {
      isString: function(valorMascotaSalud) {
        if (typeof valorMascotaSalud !== 'string') {
          throw new Error('El informe de salud debe ser un string, puedes incluir numeros');
        }
      }
    }
  },

  anio_nacimiento: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      isString: false,
    }
  }
},

{timestamps: false });

// Sincronización del modelo con la base de datos
mascotas.sync({ force: false })
  .then(() => {
    console.log('Modelo de mascotas sincronizado correctamente');
  })
  .catch(err => {
    console.error('Error al sincronizar el modelo de mascotas:', err);
  });

module.exports = mascotas;