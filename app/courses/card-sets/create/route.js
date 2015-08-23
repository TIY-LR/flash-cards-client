import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('card-set', {
      course: this.modelFor('courses.card-sets')
    });
  },

  deleteUnsavedModel: function() {
    var model = this.controller.get('model');
    if (model.get('isNew')) {
      model.destroyRecord();
    }
  }.on('deactivate'),

  actions: {
    save: function(cardset, data) {
      cardset.setProperties(data);

      cardset.save().then(() => {
        this.transitionTo('courses.card-sets');
      });
    }

  },
});
