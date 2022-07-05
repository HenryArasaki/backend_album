/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('pages').del()
  await knex('pages').insert([
    { title: 'pagina1', description: 'desc 1', date: "05/02/1999", album_id:"1"},
    { title: 'pagina2', description: 'desc 2', date: "05/02/1999", album_id:"2"},
    { title: 'pagina3', description: 'desc 3', date: "05/02/1999", album_id:"2"}
  ]);
};