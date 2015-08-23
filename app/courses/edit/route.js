import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findById('course', params.id);
  },

  actions: {
    delete: function(course) {
      course.destroyRecord();

      this.transitionTo('courses.index');
    }
  }
});
