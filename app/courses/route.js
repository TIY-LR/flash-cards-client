import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        id: 1,
        name: 'Front End'
      },
      {
        id: 2,
        name: '.NET'
      },
    ];
  }
});
