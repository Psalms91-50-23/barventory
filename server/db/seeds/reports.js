exports.seed = (knex) => {
  return knex('reports').del()
    .then(() => {
      return knex('reports').insert([
        { id: 1, date: '2021-9-29T00:00:00.000Z', users_id: 1, report_data: JSON.stringify([{}]) }
      ])
    })
}
