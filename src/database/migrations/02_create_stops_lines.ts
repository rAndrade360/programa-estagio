import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('stop_line', (table) => {
        table.increments('id').primary();
        
        table.bigInteger('stop_id')
          .references('id')
          .inTable('stops')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        
        table.bigInteger('line_id')
          .notNullable()
          .references('id')
          .inTable('lines')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('stop_line');
}