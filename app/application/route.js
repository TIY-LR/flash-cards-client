import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    showBackground: function() {
      this.controller.set('background', true);
    }.on('activate'),

    hideBackground: function() {
      this.controller.set('background', false);
    }.on('deactivate'),
  }
});
