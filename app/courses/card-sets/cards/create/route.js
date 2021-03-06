import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('card', {
      cardSet: this.modelFor('courses.card-sets.cards')
    });
  },

  deleteUnsavedModel: function() {
    var model = this.controller.get('model');
    if (model.get('isNew')) {
      model.destroyRecord();
    }
  }.on('deactivate'),

  actions: {
    save: function(card, data) {
      card.setProperties(data);
      card.save().then(() => {
        this.transitionTo('courses.card-sets.cards.index');
      });
    }
  }
});
