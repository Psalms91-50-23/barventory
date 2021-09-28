exports.seed = (knex) => {
  return knex('bottles_inventory').del()
    .then(() => {
      return knex('bottles_inventory').insert([
        { bottle_id: 1, user_id: 1 }
      ])
    })
}