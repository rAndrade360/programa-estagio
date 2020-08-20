import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('positions', (table) => {
        table.double('latitude').notNullable();
        table.double('longitude').notNullable();
        
        table.bigInteger('vehicle_id')
          .notNullable()
          .unique()
          .references('id')
          .inTable('vehicles')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('positions');
}