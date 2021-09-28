exports.seed = (knex) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        { id: 1, name: 'Neo', email: 'theone@matrix.com', password_hash: 'WTFBBQ1622ThisisnotarealHASH' }
      ])
    })
}