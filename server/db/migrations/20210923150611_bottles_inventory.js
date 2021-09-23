exports.up = (knex) => {
    return knex.schema.createTable('bottles_inventory', table => {
      table.increments('id').primary()
      table.integer('bottle_id').references('bottles.id')
      table.integer('inventory_id').references('inventory.id')
    })
  }

exports.down = (knex) => {
    return knex.schema.dropTable('bottles_inventory')
  }
