const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

function findSteps(id) {
  return db('steps as u')
      .join('schemes as s', 'u.scheme_id', 's.id')
      .select('s.id', 'u.instructions', 's.scheme_name')
      .where({ scheme_id: id });
}

function add(scheme) {
  return db('schemes')
    .insert(scheme);
    // .then(ids => {
    //   return getById(ids[0]);
    // });
}

function update(changes, id) {
  return db('schemes')
  .update(changes)
    .where({ id });
    
}

function remove(id) {
  return db('schemes')
    .where('id', id)
    .del();
}
