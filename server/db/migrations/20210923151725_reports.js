exports.up = (knex) => {
    return knex.schema.createTable('reports', table => {
      table.increments('id').primary()
      table.date('date')
      table.integer('users_id').references('users.id')
      table.json('report_data')
    })
  }

exports.down = (knex) => {
    return knex.schema.dropTable('reports')
  }
