import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'posts',
  host: 'http://localhost:3000'
});
