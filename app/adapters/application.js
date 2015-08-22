import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://flashcardsweb.azurewebsites.net',
  namespace: 'api',
});
