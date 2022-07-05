/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("albums",table =>{      
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.integer('owner_id').unsigned();
    table.foreign('owner_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE')
    table.timestamps(true,true);})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('albums');
};

