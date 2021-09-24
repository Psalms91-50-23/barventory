exports.seed = (knex) => {
  return knex('inventory').del()
    .then(() => {
      return knex('inventory').insert([
        { id: 1, name: 'Smirnoff Vodka', size: 1000, image: '/img/transparent-smirnoff-vodka-1000ml.jpg', silhouette: '/img/silhouette-smirnoff-vodka-1000ml.jpg' }
      ])
    })
}
