import pkg from 'pg';
const { Pool } = pkg;

const pgPool = new Pool({
    host: process.env.PG_DB_HOST,
    user: process.env.PG_DB_USER,
    password: process.env.PG_DB_PASSWORD,
    database: process.env.PG_DB_NAME,
    port: process.env.PG_DB_PORT,
    max: 10,              
    idleTimeoutMillis: 0, 
});

export default pgPool;
