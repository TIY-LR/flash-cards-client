import Ember from 'ember';

export default Ember.Route.extend({
  showBackground: function() {
    this.send('showBackground');
  }.on('activate'),

  hideBackground: function() {
    this.send('hideBackground');
  }.on('deactivate'),
});
