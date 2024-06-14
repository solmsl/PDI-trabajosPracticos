const mysql = require('mysql');
const { promisify } = require(`util`);

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "riab",
  connectionLimit: 10, // Limita el número de conexiones simultáneas
})

const promiseQuery = promisify(db.query).bind(db)

db.getConnection((err, connection) => {
  if (err) throw err
  // Creamos las tablas si es que no existen
  connection.query(
    `CREATE TABLE IF NOT EXISTS rescatistas (
      dni INT NOT NULL AUTO_INCREMENT,
      nombre VARCHAR(100) NOT NULL,
      apellido VARCHAR(100) NOT NULL,
      telefono INT NOT NULL,
      email VARCHAR(100) NOT NULL,
      direccion VARCHAR(100) NOT NULL,
      genero VARCHAR(50) NOT NULL,
      PRIMARY KEY (dni)
    )`
  )

  connection.query(
    `CREATE TABLE IF NOT EXISTS personas (
      dni INT NOT NULL AUTO_INCREMENT,
      nombre VARCHAR(100) NOT NULL,
      apellido VARCHAR(100) NOT NULL,
      telefono INT NOT NULL,
      email VARCHAR(100) NOT NULL,
      direccion VARCHAR(100) NOT NULL,
      genero VARCHAR(50) NOT NULL,
      PRIMARY KEY (dni)
    )`
  )
})

module.exports = promiseQuery
