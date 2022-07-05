/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("tags",table=>{
        table.increments("id").primary()
        table.text("name").notNullable()
        table.integer("page_id").notNullable()
        table.foreign("page_id").references("pages.id").onDelete("CASCADE").onUpdate("CASCADE")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("tags")
};
