exports.seed = (knex) => {
  return knex('bottles_inventory').del()
    .then(() => {
      return knex('bottles_inventory').insert([
        { id: 1, bottle_id: 1, inventory_id: 1 }
      ])
    })
}