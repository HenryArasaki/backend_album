/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tags').del()
  await knex('tags').insert([
    { name:'tag1', page_id:'1'},
    { name:'tag2', page_id:'2'},
    { name:'tag3', page_id:'2'},
    { name:'tag4', page_id:'3'},

  ]);
};
