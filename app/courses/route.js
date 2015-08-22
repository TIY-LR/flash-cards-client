import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // Uncomment this when the API is ready
    // return this.store.findAll('courses');

    return [
      {
        id: 1,
        name: 'Front-Engineering'
      },
      {
        id: 2,
        name: '.NET'
      },
    ];
  }
});
