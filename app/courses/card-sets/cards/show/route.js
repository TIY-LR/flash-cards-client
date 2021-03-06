import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
    return this.store.findById('card', params.id);
  },
  actions: {
    delete: function(card) {
      card.destroyRecord();

      this.transitionTo('courses.card-sets.cards.index');
    }
  }
});
