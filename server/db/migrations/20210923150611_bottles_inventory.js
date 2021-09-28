exports.up = (knex) => {
    return knex.schema.createTable('bottles_inventory', table => {
      table.increments('id').primary()
      table.integer('bottle_id').references('bottles.id')
      table.integer('user_id').references('users.id')
    })
  }

exports.down = (knex) => {
    return knex.schema.dropTable('bottles_inventory')
  }
