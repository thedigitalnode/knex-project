/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('pet_food_type', table => {
    table.increments('id');
    table.string('name').notNullable(); // equivalent of varchar(255)
    table.string('description').notNullable(); // equivalent of varchar(255)
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pet_food_type');
};
