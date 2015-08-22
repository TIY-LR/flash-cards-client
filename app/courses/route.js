import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // Uncomment this when the API is ready
    // return this.store.findAll('courses');

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
