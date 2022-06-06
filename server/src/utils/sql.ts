import postgres from "postgres";
import config from "./config";

/**
 * @typedef {Object} sql
 * @property {string} [host]
 * @property {string | number} [port]
 * @property {string} [database]
 * @property {string} [user]
 * @property {string} [password]
 */

const sql = postgres({
    host: config.db.host,
    port: parseInt(config.db.port),
    database: config.db.database,
    user: config.db.user,
    password: config.db.password,
});

export default sql;