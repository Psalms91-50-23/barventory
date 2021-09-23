exports.seed = (knex) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        { id: 1, name: 'Neo', inventory_id: 1, email: 'theone@matrix.com', password_hash: 'WTFBBQ1622ThisisnotarealHASH' }
      ])
    })
}