const Pool = require('pg').Pool;
const pool = new Pool({
 user: "postgres",
 //password: "password",
 password: "password1",
 //database: "database",
 database: "postgres",
 //host: "localhost",
 host: "217.146.78.152",

 port: "5432"
});
module.exports = pool;
