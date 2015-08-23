import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('course');
  },

  actions: {
    deleteCourse: function(course) {
      if (window.confirm('Are you sure you want to delete?')) {
        course.destroyRecord();
    }
  }
}
});
