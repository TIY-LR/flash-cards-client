import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
    return this.store.createRecord('course');
  },

  actions: {
    save: function(course, data) {
      course.setProperties(data);

      course.save().then(() => {
        this.transitionTo('courses');
      });
    }

  },
});
