import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('card');
  },

  actions: {
    save: function(data) {
      var card = this.modelFor('cards.create');
      card.setProperties(data);
      card.save().then(() => {
        this.transitionTo('cards.index');
      });
    }
  }
});
