import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('stops', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.double('latitude').notNullable();
        table.double('longitude').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('stops');
}