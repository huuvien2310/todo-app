/**
 * @typedef {Object} Config
 * @property {string | number} [host]
 * @property {any} [port]
 * @property {string} [database]
 * @property {string} [user]
 * @property {string} [password]
 */

/** @type {Config} config */
const config = {
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '5432',
        database: process.env.DB_NAME || 'testdb',
        user: process.env.DB_USER || 'testuser',
        password: process.env.DB_PASSWORD || 'postgres',
    },
}

export default config;