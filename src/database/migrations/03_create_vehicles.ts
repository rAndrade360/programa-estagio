import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('vehicles', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('model').notNullable();
        table.bigInteger('line_id')
          .notNullable()
          .references('id')
          .inTable('lines')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('vehicles');
}