import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
    return this.store.findById('card', params.id);
  },

    actions: {
    deleteCourse: function(course) {
      if (window.confirm('Are you sure you want to delete?')) {
        course.destroyRecord();
    }
  }
}
});
