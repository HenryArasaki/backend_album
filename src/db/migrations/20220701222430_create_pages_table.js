/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("pages",table=>{
    table.increments("id").primary()
    table.text("title").notNullable()
    table.text("description")
    table.date("date").notNullable()
    table.integer("album_id").notNullable()
    table.foreign("album_id").references("albums.id").onDelete("CASCADE").onUpdate("CASCADE")
    table.timestamps(true,true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("pages")
};
