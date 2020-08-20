import Knex from 'knex';

const databaseConfig: Knex.Config = {
    client: 'postgresql',
    connection: {
      host: 'database-postgres',
      port: 5432,
      user : 'postgres',
      password : 'docker',
      database : 'apiaikodb',
}
}

const connection = Knex(databaseConfig);
export default connection;
