const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Navi",
    password: "HERE",
    port: 5432,
});

module.exports = pool;
