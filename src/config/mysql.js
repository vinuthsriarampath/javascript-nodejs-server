import mysql from 'mysql2/promise';

const mySqlPool = mysql.createPool({
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME, 
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default mySqlPool;
