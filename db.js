const mysql = require("mysql2")
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "javaconetion"
});

connection.connect(err => {
    if (err){
        console.error("error de conexion:", err.message);
    } else {
        console.log("conectado a MySql correctamente");
    }
});

module.exports = connection;