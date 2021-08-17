const { Pool } = require('pg');
require('env2')('./config.env');

const { DEV_DB_URL } = process.env;

if (!DEV_DB_URL) {
  throw new Error('link db not found >>');
}

const options = {
    connectionString: DATABASE_URL,
    ssl: false
}

module.exports = new Pool(options);
