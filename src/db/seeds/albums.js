/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('albums').del()
  await knex('albums').insert([
    {name: 'album 1',  owner_id: '1'},
    {name: 'album 2', owner_id: '1' },
    {name: 'album 3',  owner_id: '2'},
  ]);
};
