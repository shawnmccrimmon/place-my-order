import fixture from 'can-fixture';

const store = fixture.store([{
  _id: 0,
  description: 'First item'
}, {
  _id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /restaurants': store.findAll,
  'GET /restaurants/{_id}': store.findOne,
  'POST /restaurants': store.create,
  'PUT /restaurants/{_id}': store.update,
  'DELETE /restaurants/{_id}': store.destroy
});

export default store;
