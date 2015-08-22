import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        id: 1,
        name: 'The Flashyard (wizards only)'
      },
      {
        id: 2,
        name: 'Droppin That Flashyard Knowledge.'
      },
      {
        id: 3,
        name: 'Front End'
      }
    ];
  }
});
