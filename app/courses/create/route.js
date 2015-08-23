import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('course');
  },

  deleteUnsavedModel: function() {
    var model = this.controller.get('model');
    if (model.get('isNew')) {
      model.destroyRecord();
    }
  }.on('deactivate'),

  actions: {
    save: function(course, data) {
      course.setProperties(data);

      course.save().then(() => {
        this.transitionTo('courses');
      });
    }

  },
});
