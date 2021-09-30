exports.seed = (knex) => {
  return knex("bottles_inventory")
    .del()
    .then(() => {
      return knex("bottles")
        .del()
        .then(() => {
          return knex("reports")
            .del()
            .then(() => {
              return knex("users").del();
            });
        });
    });
};
