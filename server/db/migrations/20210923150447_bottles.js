exports.up = (knex) => {
    return knex.schema.createTable('bottles', table => {
      table.increments('id').primary()
      table.string('name')
      table.integer('size')
      table.string('image')
      table.string('silhouette')
    })
  }

exports.down = (knex) => {
    return knex.schema.dropTable('bottles')
  }