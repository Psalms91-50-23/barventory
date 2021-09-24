exports.up = (knex) => {
    return knex.schema.createTable('bottles', table => {
      table.increments('id').primary()
      table.string('name')
      table.string('size')
      table.integer('size_num')
      table.string('image')
      table.string('silhouette')
    })
  }

exports.down = (knex) => {
    return knex.schema.dropTable('bottles')
  }