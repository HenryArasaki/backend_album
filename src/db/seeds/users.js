/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {name: 'henry', email:"henry@email.com",password:"123"},
    {name: 'batata', email:"batata@email.com",password:"456"},
    {name: 'tomate', email:"tomate@email.com",password:"789"},
  ]);
};
