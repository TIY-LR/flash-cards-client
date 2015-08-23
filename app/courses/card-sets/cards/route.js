import Ember from 'ember';

export default Ember.Route.extend({
  // Delete this model function to use the look up from the server
  model: function() {
    return this.store.findAll('card');
  }
});
