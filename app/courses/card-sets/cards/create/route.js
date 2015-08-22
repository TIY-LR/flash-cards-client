import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('card');
  },

  actions: {
    save: function(card, data) {
      card.setProperties(data);
      card.save().then(() => {
        this.transitionTo('courses.card-sets.cards.index');
      });
    }
  }
});
