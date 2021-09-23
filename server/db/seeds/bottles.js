exports.seed = (knex) => {
  return knex('bottles').del()
    .then(() => {
      return knex('bottles').insert([
        { id: 1, name: 'Smirnoff Vodka', size: 1000, image: '/img/transparent-smirnoff-vodka-1000ml.jpeg', silhouette: '/img/silhouette-smirnoff-vodka-1000ml.jpeg' }
      ])
    })
}