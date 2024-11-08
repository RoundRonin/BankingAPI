require('dotenv').config();

module.exports = {
    development: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        // host: process.env.POSTGRES_HOST,
        host: '127.0.0.1',
        port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432, // Ensure port is an integer
        dialect: 'postgres',
        logging: process.env.LOGGING === 'true' // Ensure logging is a boolean
    },
    test: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
        dialect: 'postgres',
        logging: process.env.LOGGING === 'true'
    },
    production: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
        dialect: 'postgres',
        logging: process.env.LOGGING === 'true'
    }
};
