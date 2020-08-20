// Update with your config settings.
import Knex from 'knex';
import path from 'path';

const config: Knex.Config = {

    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5433,
      database: 'apiaikodb',
      user:     'postgres',
      password: 'docker'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    useNullAsDefault: true
};

module.exports = config;